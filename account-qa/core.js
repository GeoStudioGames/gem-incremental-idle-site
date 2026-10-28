(() => {
  'use strict';
  const { TARGET, KEY, validatePreparedReadback } = globalThis.GEQAValidator;
  const WEB_ID = '779806693348-fgjd56dhqdjf8hk88gs8s3lurcqac18e.apps.googleusercontent.com';
  const CONSENT = 'REQUEST_GAME_ACCOUNT_AND_ASSOCIATED_DATA_DELETION_V1';
  const gates = ['identity','protectedRead','getRequest','submitRequest'];
  const configKeys = ['enabled','deploymentReviewed','originReviewed','oauthReviewed','publicOrigin',
    'projectId','environmentId','environmentName','moduleName','googleWebClientId','policyActivationReviewed','singleSubmitApproved','gates'].sort();
  class Failure extends Error { constructor(kind) { super(kind); this.kind = kind; } }
  const fail = kind => { throw new Failure(kind); };
  function validConfig(c, origin) {
    try {
      const u = new URL(c.publicOrigin);
      return JSON.stringify(Object.keys(c).sort()) === JSON.stringify(configKeys)
        && ['enabled','deploymentReviewed','originReviewed','oauthReviewed'].every(k => c[k] === true)
        && Object.keys(TARGET).every(k => c[k] === TARGET[k]) && c.googleWebClientId === WEB_ID
        && u.protocol === 'https:' && u.origin === c.publicOrigin && origin === c.publicOrigin
        && !['localhost','127.0.0.1','[::1]'].includes(u.hostname)
        && ['policyActivationReviewed','singleSubmitApproved'].every(k => typeof c[k] === 'boolean')
        && JSON.stringify(Object.keys(c.gates).sort()) === JSON.stringify([...gates].sort())
        && gates.every(k => typeof c.gates[k] === 'boolean')
        && (!c.gates.protectedRead || c.gates.identity)
        && (!c.gates.getRequest || (c.gates.protectedRead && c.policyActivationReviewed))
        && (!c.gates.submitRequest || (c.gates.getRequest && c.singleSubmitApproved));
    } catch { return false; }
  }
  async function boundedJson(response, signal) {
    if (response.status !== 200) fail(response.status === 401 || response.status === 403 ? 'SignInRequired' : response.status === 404 ? 'NotFound' : response.status === 429 ? 'RateLimited' : 'HttpFailure');
    if (Number(response.headers.get('content-length')) > 65536) fail('InvalidResponse');
    if (!/^application\/(?:[a-z0-9.+-]+\+)?json(?:;|$)/i.test(response.headers.get('content-type') || '')) fail('InvalidResponse');
    const reader = response.body?.getReader();
    if (!reader) fail('InvalidResponse');
    const parts = []; let length = 0;
    try {
      for (;;) {
        if (signal.aborted) fail('Canceled');
        const { value, done } = await reader.read();
        if (done) break;
        length += value.byteLength;
        if (length > 65536) { value.fill(0); fail('InvalidResponse'); }
        parts.push(value);
      }
      const all = new Uint8Array(length); let offset = 0;
      for (const part of parts) { all.set(part, offset); offset += part.byteLength; }
      try { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(all)); }
      catch { fail('InvalidResponse'); }
      finally { all.fill(0); }
    } finally {
      for (const part of parts) part.fill(0);
      try { await reader.cancel(); } catch { /* no raw errors */ }
      reader.releaseLock();
    }
  }
  function parseReply(data, player, now) {
    const r = data?.output;
    const fields = ['status','requestId','playerId','requestedUtc','retryAfterSeconds'];
    const states = ['NotConfigured','SignInRequired','InvalidRequest','RateLimited','Unavailable','PreparationRequired','ReviewRequired','Ready','UnknownOutcome','RequestReceived'];
    if (!r || JSON.stringify(Object.keys(r).sort()) !== JSON.stringify(fields.sort())
        || !states.includes(r.status) || !Number.isSafeInteger(r.retryAfterSeconds) || r.retryAfterSeconds < 0 || r.retryAfterSeconds > 3600) fail('InvalidResponse');
    if (r.status === 'RequestReceived') {
      if (!/^[a-f0-9]{32}$/.test(r.requestId) || r.playerId !== player || !Number.isSafeInteger(r.requestedUtc)
          || r.requestedUtc <= 0 || r.requestedUtc > Math.floor(now / 1000) + 300) fail('InvalidResponse');
    } else if (r.requestId !== '' || r.playerId !== '' || r.requestedUtc !== 0) fail('InvalidResponse');
    return { ...r };
  }
  class Session {
    #config; #deps; #verified=false; #token=''; #player=''; #expires=0; #accepted=false; #slot=''; #prepared=false; #readyAt=0;
    #busy=false; #epoch=0; #abort=null; #expiryTimer=null; #choosing=false; #authSpent=false; #readSpent=false;
    #getBeforeSpent=false; #getAfterSpent=false; #submitSpent=false; #unknown=false; #receipt=null; #lastCloud=-Infinity;
    constructor(config, deps) {
      this.#config = JSON.parse(JSON.stringify(config));
      this.#deps = deps;
    }
    #gate(stage) {
      if (!validConfig(this.#config, this.#deps.origin()) || this.#config.gates[stage] !== true) fail('NotConfigured');
    }
    #active() {
      if (this.#token && this.#deps.now() >= this.#expires) this.clear();
      return this.#verified && !!this.#token && !!this.#player && this.#deps.now() < this.#expires;
    }
    #identity() { if (!this.#active()) fail('SignInRequired'); if (!this.#accepted) fail('ConfirmOwner'); }
    #idle() { if (this.#busy || this.#choosing) fail('Busy'); }
    #cooldown() { if (this.#deps.now() - this.#lastCloud < 5000) fail('Wait'); }
    clear() {
      this.#epoch++; this.#abort?.abort(); this.#abort=null;
      if (this.#expiryTimer !== null) this.#deps.clearTimer(this.#expiryTimer);
      this.#expiryTimer=null; this.#verified=false; this.#token=''; this.#player=''; this.#expires=0; this.#accepted=false;
      this.#slot=''; this.#prepared=false; this.#readyAt=0; this.#receipt=null; this.#choosing=false;
      // Attempt/unknown markers survive local logout. No automatic retry or new submit.
    }
    view() {
      const active=this.#active(), cfg=validConfig(this.#config,this.#deps.origin());
      const elapsed=this.#deps.now()-this.#lastCloud, idle=!this.#busy&&!this.#choosing;
      return Object.freeze({ active, playerId: active ? this.#player : '', accepted:this.#accepted,
        slotBound:!!this.#slot, prepared:this.#prepared, ready:!!this.#readyAt && this.#deps.now()-this.#readyAt<=60000,
        busy:this.#busy, choosing:this.#choosing, submitSpent:this.#submitSpent, unknown:this.#unknown,
        receipt:this.#receipt ? {...this.#receipt} : null, remainingMs:active?Math.max(0,this.#expires-this.#deps.now()):0,
        waitMs:Math.max(0,5000-elapsed), configured:cfg,
        canLogin:cfg&&this.#config.gates.identity&&idle&&!active&&!this.#authSpent&&!this.#submitSpent,
        canRead:cfg&&this.#config.gates.protectedRead&&active&&this.#accepted&&!!this.#slot&&idle&&!this.#readSpent&&!this.#submitSpent,
        canGet:cfg&&this.#config.gates.getRequest&&active&&this.#accepted&&this.#prepared&&idle&&elapsed>=5000
          && (this.#submitSpent?!this.#getAfterSpent:!this.#getBeforeSpent),
        canSubmit:cfg&&this.#config.gates.submitRequest&&active&&this.#accepted&&this.#prepared&&idle&&elapsed>=5000
          && !!this.#readyAt&&this.#deps.now()-this.#readyAt<=60000&&!this.#submitSpent&&!this.#unknown
      });
    }
    beginIdentity() {
      this.#gate('identity'); this.#idle();
      if (this.#active() || this.#authSpent || this.#submitSpent) fail('AttemptUsed');
      this.#choosing=true; return ++this.#epoch;
    }
    async #operation(stage, work) {
      this.#gate(stage); this.#idle(); this.#busy=true;
      const epoch=this.#epoch, controller=new AbortController(); this.#abort=controller;
      const timer=this.#deps.setTimer(()=>controller.abort(),20000);
      const alive=()=>{ if (epoch!==this.#epoch || controller.signal.aborted) fail('Canceled'); };
      try { const result=await work(controller.signal,alive); alive(); return result; }
      catch(e) { this.clear(); throw new Failure(e instanceof Failure?e.kind:'Unavailable'); }
      finally { this.#deps.clearTimer(timer); if(this.#abort===controller)this.#abort=null; this.#busy=false; }
    }
    async #send(kind, signal, alive, credential='') {
      const stage={auth:'identity',user:'identity',read:'protectedRead',get:'getRequest',submit:'submitRequest'}[kind];
      this.#gate(stage); alive();
      let url, init={method:'GET',headers:{},signal,cache:'no-store',credentials:'omit',redirect:'error',referrerPolicy:'no-referrer'};
      const player=encodeURIComponent(this.#player);
      if(kind==='auth') {
        url='https://player-auth.services.api.unity.com/v1/authentication/external-token/google.com';
        init.method='POST'; init.headers={'Content-Type':'application/json',ProjectId:TARGET.projectId,UnityEnvironment:TARGET.environmentName,'Error-Version':'v1'};
        init.body=JSON.stringify({idProvider:'google.com',token:credential,signInOnly:true});
      } else {
        if(!this.#token || !this.#player || this.#deps.now()>=this.#expires) fail('SignInRequired');
        init.headers.Authorization='Bearer '+this.#token;
        if(kind==='user') {
          url='https://player-auth.services.api.unity.com/v1/users/'+player;
          init.headers.ProjectId=TARGET.projectId; init.headers.UnityEnvironment=TARGET.environmentName;
        } else if(kind==='read') {
          url='https://cloud-save.services.api.unity.com/v1/data/projects/'+TARGET.projectId+'/players/'+player+'/protected/items?keys='+KEY;
        } else if(kind==='get'||kind==='submit') {
          url='https://cloud-code.services.api.unity.com/v1/projects/'+TARGET.projectId+'/modules/'+TARGET.moduleName+'/'+(kind==='submit'?'SubmitRequest':'GetRequest');
          init.method='POST'; init.headers['Content-Type']='application/json'; init.body=JSON.stringify({params:kind==='submit'?{consent:CONSENT}:{}});
        } else fail('InvalidRequest');
      }
      try { const response=await this.#deps.fetch(url,init); alive(); const value=await boundedJson(response,signal); alive(); return value; }
      finally { credential=''; init.body=''; init.headers={}; }
    }
    async signIn(credential,ticket) {
      this.#gate('identity');
      if (!this.#choosing || ticket!==this.#epoch || this.#authSpent) fail('Canceled');
      this.#choosing=false; this.#authSpent=true;
      if(typeof credential!=='string'||credential.length<32||credential.length>16384) { this.clear(); fail('SignInRequired'); }
      try {
        return await this.#operation('identity',async(signal,alive)=>{
          let auth=await this.#send('auth',signal,alive,credential); credential='';
          const player=auth?.userId||auth?.user?.id;
          if(typeof player!=='string'||!/^[A-Za-z0-9_-]{1,128}$/.test(player)|| (auth.user?.id && auth.user.id!==player)
              || typeof auth.idToken!=='string'||auth.idToken.length<32||auth.idToken.length>16384
              || !/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(auth.idToken)
              || !Number.isFinite(auth.expiresIn)||auth.expiresIn<=0) fail('InvalidResponse');
          this.#token=auth.idToken; this.#player=player; this.#expires=this.#deps.now()+Math.min(auth.expiresIn,600)*1000;
          auth.idToken=''; auth.sessionToken=''; auth=null;
          let user=await this.#send('user',signal,alive);
          if(user?.id!==player||user.disabled!==false||!Array.isArray(user.externalIds)
              ||!user.externalIds.some(x=>x.providerId==='google.com'&&typeof x.externalId==='string'&&x.externalId.length>0)) fail('WrongAccount');
          user=null; this.#verified=true;
          this.#expiryTimer=this.#deps.setTimer(()=>{this.clear(); this.#deps.changed?.();},Math.max(0,this.#expires-this.#deps.now()));
          return this.view();
        });
      } finally {credential='';}
    }
    acceptOwner(playerId,confirmed) {
      this.#idle(); if(!this.#active()) fail('SignInRequired');
      if(this.#readSpent||this.#submitSpent) fail('AttemptUsed');
      this.#accepted=false; this.#slot=''; this.#prepared=false; this.#readyAt=0;
      if(confirmed!==true||playerId!==this.#player) fail('ConfirmOwner');
      this.#accepted=true; return this.view();
    }
    bindSlot(slot,operatorConfirmed) {
      this.#idle(); this.#identity();
      if(this.#readSpent||this.#submitSpent) fail('AttemptUsed');
      this.#slot=''; this.#prepared=false; this.#readyAt=0;
      if(operatorConfirmed!==true||typeof slot!=='string'||!/^[a-f0-9]{32}$/.test(slot)||/^0+$/.test(slot)) fail('ConfirmSlot');
      this.#slot=slot; return this.view();
    }
    async readPrepared() {
      this.#gate('protectedRead'); this.#idle(); this.#identity();
      if(!this.#slot) fail('ConfirmSlot'); if(this.#readSpent||this.#submitSpent)fail('AttemptUsed');
      this.#readSpent=true;
      return this.#operation('protectedRead',async(signal,alive)=>{
        let result=await this.#send('read',signal,alive);
        const check=validatePreparedReadback(result,{...TARGET,playerId:this.#player,slotId:this.#slot}); result=null;
        if(!check.valid) fail('ReviewRequired');
        this.#prepared=true; return {status:'Prepared',writeLockPresent:true};
      });
    }
    async getRequest() {
      this.#gate('getRequest'); this.#idle(); this.#identity(); this.#cooldown();
      if(!this.#prepared) fail('ReadbackRequired');
      if(this.#submitSpent?this.#getAfterSpent:this.#getBeforeSpent)fail('AttemptUsed');
      if(this.#submitSpent)this.#getAfterSpent=true;else this.#getBeforeSpent=true;
      this.#readyAt=0; this.#lastCloud=this.#deps.now();
      try { return await this.#operation('getRequest',async(signal,alive)=>{
        const reply=parseReply(await this.#send('get',signal,alive),this.#player,this.#deps.now());
        if(reply.status==='Ready'&&!this.#submitSpent&&!this.#unknown)this.#readyAt=this.#deps.now();
        if(reply.status==='RequestReceived'){this.#submitSpent=true;this.#unknown=false;this.#receipt=reply;}
        return this.#unknown&&reply.status!=='RequestReceived'?{...reply,status:'UnknownOutcome'}:reply;
      }); } finally {this.#lastCloud=this.#deps.now();}
    }
    async submitRequest(confirmed) {
      this.#gate('submitRequest'); this.#idle(); this.#identity(); this.#cooldown();
      if(this.#submitSpent||this.#unknown)fail('AttemptUsed');
      if(!this.#prepared||!this.#readyAt||this.#deps.now()-this.#readyAt>60000)fail('ReadyRequired');
      if(confirmed!==true)fail('ConsentRequired');
      this.#submitSpent=true; this.#unknown=true; this.#readyAt=0; this.#lastCloud=this.#deps.now();
      try { return await this.#operation('submitRequest',async(signal,alive)=>{
        const reply=parseReply(await this.#send('submit',signal,alive),this.#player,this.#deps.now());
        if(reply.status==='RequestReceived'){this.#unknown=false;this.#receipt=reply;}
        return this.#unknown?{...reply,status:'UnknownOutcome'}:reply;
      }); } catch {fail('UnknownOutcome');}
      finally {this.#lastCloud=this.#deps.now();}
    }
  }
  globalThis.GEQACore=Object.freeze({Session,Failure,validConfig,WEB_ID,CONSENT,TARGET});
})();