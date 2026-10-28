(() => {
  'use strict';
  const messages=Object.freeze({
    Configured:'Dopuszczono wybrane etapy QA. Żaden nie uruchomi się sam. Zacznij od świadomego wyboru Google.',
    Offline:'Podgląd offline. Logowanie i wywołania usług są wyłączone. Niczego nie wysłano.',
    Choosing:'Wybierz oryginalne Google używane w grze. Samo logowanie nie wysyła zgłoszenia.',
    Identity:'Unity potwierdziło istniejący profil Google. Player ID poniżej widzisz tylko lokalnie. Potwierdź, że wybrałeś własne konto.',
    Owner:'Przyjęto wskazany profil właściciela. Przygotowanie rekordu przez operatora jest osobnym krokiem.',
    Slot:'Przyjęto wskazany slot. Jego obecność i writeLock nie są jeszcze sprawdzone.',
    Prepared:'Odczytano własny Prepared Ready: dane i slot zgodne, writeLock obecny. Nie utworzono zgłoszenia.',
    Ready:'GetRequest potwierdził Ready. Przed wysłaniem odczekaj co najmniej 5 sekund i osobno potwierdź zakres.',
    RequestReceived:'Zarejestrowano zgłoszenie testowe. Konto i dane NIE zostały usunięte. Operator musi odebrać rekord.',
    UnknownOutcome:'Wynik wysłania jest nieznany. Nie wysyłaj ponownie, nie resetuj slotu i nie odświeżaj strony w celu ponowienia. Potrzebny odbiór operatora.',
    NotConfigured:'Ten etap jest wyłączony lub konfiguracja nie została odebrana. Niczego nie włączaj na podstawie błędu.',
    SignInRequired:'Nie ma ważnej, potwierdzonej sesji. Etap zatrzymany; bez automatycznego logowania.',
    WrongAccount:'Nie potwierdzono właściwego istniejącego profilu Google. Sesję zamknięto; nie utworzono nowego konta.',
    NotFound:'Nie znaleziono istniejącego konta lub zasobu. Brak rejestracji i automatycznej próby innego konta.',
    ConfirmOwner:'Porównaj wyświetlony Player ID, wpisz go i zaznacz potwierdzenie własnego konta.',
    ConfirmSlot:'Potrzebny jest właściwy slotId (32 małe znaki hex) i potwierdzenie przygotowania przez operatora.',
    ConsentRequired:'Wysłanie wymaga osobnego, świadomego potwierdzenia zakresu.',
    ReadyRequired:'Brak świeżego Ready z GetRequest. Wysłanie jest zablokowane.',
    ReadbackRequired:'Najpierw potrzebny odebrany odczyt własnego Prepared Ready i writeLock.',
    ReviewRequired:'Dane Protected, slot lub writeLock nie przeszły kontroli. Etap zatrzymany; bez nadpisania.',
    PreparationRequired:'Brak przygotowanego rekordu. Strona go nie utworzy. Potrzebny oddzielny krok operatora.',
    InvalidResponse:'Odpowiedź nie przeszła kontroli. Etap zatrzymany; nie pokazano surowych danych.',
    InvalidRequest:'Żądanie nie zostało przyjęte. Etap zatrzymany.',
    AttemptUsed:'Próba w tym otwarciu strony została zużyta. Nie ponawiaj przez odświeżenie strony.',
    RateLimited:'Usługa ograniczyła wywołania. Brak ponowień; zatrzymaj ten etap.',
    HttpFailure:'Usługa zwróciła błąd. Etap zatrzymany bez ponawiania.',
    Unavailable:'Brak potwierdzonego wyniku połączenia. Nie ponowiono żądania.',
    Busy:'Trwa operacja. Nie uruchomiono drugiej.', Wait:'Odczekaj co najmniej 5 sekund od poprzedniej odpowiedzi Cloud Code.',
    Canceled:'Zamknięto lokalną sesję i wyczyszczono dane z widoku. Nie usuwa to konta ani wcześniejszego zgłoszenia.'
  });
  function makeGoogleLoader(document,win,setTimer,clearTimer) {
    let promise=null, script=null;
    return () => {
      if(promise)return promise;
      promise=new Promise((resolve,reject)=>{
        script=document.createElement('script'); script.src='https://accounts.google.com/gsi/client';
        script.async=true; script.referrerPolicy='strict-origin-when-cross-origin';
        const timer=setTimer(()=>{script.remove();reject(new Error('GIS unavailable'));},15000);
        script.onload=()=>{clearTimer(timer);win.google?.accounts?.id?resolve(win.google.accounts.id):reject(new Error('GIS unavailable'));};
        script.onerror=()=>{clearTimer(timer);script.remove();reject(new Error('GIS unavailable'));};
        document.head.append(script);
      });
      return promise;
    };
  }
  function mount(document,win,config,deps={}) {
    const $=id=>document.getElementById(id);
    const now=deps.now||(()=>Date.now()), setTimer=deps.setTimer||((f,n)=>win.setTimeout(f,n)), clearTimer=deps.clearTimer||(id=>win.clearTimeout(id));
    let refreshTimer=null,generation=0,stopped=false,google=null;
    const session=new globalThis.GEQACore.Session(config,{origin:()=>win.location.origin,now,
      fetch:deps.fetch||((...args)=>win.fetch(...args)),setTimer,clearTimer,changed:()=>{status(session.view().unknown?'UnknownOutcome':'Canceled');render();}});
    const loadGoogle=deps.loadGoogle||makeGoogleLoader(document,win,setTimer,clearTimer);
    function status(kind){$('status').textContent=messages[kind]||messages.Unavailable;}
    function render(){
      const v=session.view();
      $('mode').textContent=v.configured?'Etapy według odebranej konfiguracji QA':'OFFLINE — usługi wyłączone';
      $('mode-detail').textContent=v.configured?'Aktywne są wyłącznie etapy wskazane w odebranej konfiguracji. Każdy wymaga Twojego osobnego działania.':'Nie ustalono jeszcze zatwierdzonego adresu HTTPS. Wszystkie etapy są wyłączone. Otwarcie pliku nie ładuje Google i niczego nie wysyła.';
      $('mode-title').textContent=v.configured?'Kontrolowana próba QA — według odebranej konfiguracji.':'Gotowy podgląd lokalny — bez połączenia z usługami.';
      $('login').disabled=!v.canLogin||stopped||!$('login-consent').checked;
      $('login-consent').disabled=!v.canLogin||stopped;
      $('owner-id').disabled=!v.active||v.accepted||v.busy;
      $('owner-confirm').disabled=!v.active||v.accepted||v.busy;
      $('accept-owner').disabled=!v.active||v.accepted||v.busy;
      $('slot').disabled=!v.accepted||v.slotBound||v.busy;
      $('slot-confirm').disabled=!v.accepted||v.slotBound||v.busy;
      $('accept-slot').disabled=!v.accepted||v.slotBound||v.busy;
      $('read').disabled=!v.canRead||stopped;
      $('get').disabled=!v.canGet||stopped;
      $('consent').disabled=!v.canSubmit||stopped;
      $('submit').disabled=!v.canSubmit||stopped||!$('consent').checked;
      $('cancel').disabled=!v.active&&!v.choosing&&!v.busy;
      $('player').textContent=v.playerId||'Player ID pojawi się dopiero po zatwierdzonym logowaniu.';
      $('readback').textContent=v.prepared?'Odczyt Prepared Ready: zgodny; writeLock obecny.':'Nie odczytano rekordu Protected.';
      $('receipt').textContent=v.receipt?'Numer: '+v.receipt.requestId+'\nCzas UTC: '+new Date(v.receipt.requestedUtc*1000).toISOString():'';
      $('used').hidden=!v.submitSpent;
      $('get').textContent=v.submitSpent?'Odczytaj wynik raz':'Sprawdź GetRequest raz';
      if(!v.active){$('owner-id').value='';$('owner-confirm').checked=false;$('slot').value='';$('slot-confirm').checked=false;$('consent').checked=false;}
      if(refreshTimer!==null)clearTimer(refreshTimer);
      refreshTimer=v.active&&v.waitMs>0?setTimer(()=>{refreshTimer=null;render();},v.waitMs+10):null;
    }
    async function action(work){
      try{const pending=work();render();const result=await pending;status(result?.status||result||'Unavailable');}
      catch(e){const kind=e instanceof globalThis.GEQACore.Failure?e.kind:'Unavailable';status(kind);
        if(!['Wait','Busy','ConfirmOwner','ConfirmSlot','ConsentRequired','ReadyRequired','ReadbackRequired'].includes(kind))stopped=true;}
      finally{render();}
    }
    async function credential(response,ticket,gen){
      let token=response?.credential; if(response)response.credential='';
      if(gen!==generation){token='';return;}
      $('google').replaceChildren();
      try{const pending=session.signIn(token,ticket);token='';render();await pending;
        if(gen===generation)status('Identity');
      }catch(e){if(gen===generation){status(e instanceof globalThis.GEQACore.Failure?e.kind:'Unavailable');stopped=true;}}
      finally{token='';render();}
    }
    $('login').addEventListener('click',async()=>{
      if(!$('login-consent').checked||stopped)return;
      let ticket;const gen=++generation;
      try{ticket=session.beginIdentity();status('Choosing');render();google=await loadGoogle();
        if(gen!==generation||!session.view().choosing)return;
        google.initialize({client_id:globalThis.GEQACore.WEB_ID,auto_select:false,button_auto_select:false,ux_mode:'popup',
          callback:r=>credential(r,ticket,gen)});
        google.disableAutoSelect(); google.renderButton($('google'),{type:'standard',theme:'outline',size:'large',text:'signin_with',locale:'pl'});
      }catch{session.clear();status('NotConfigured');stopped=true;render();}
    });
    $('accept-owner').addEventListener('click',()=>action(()=>{session.acceptOwner($('owner-id').value.trim(),$('owner-confirm').checked);return 'Owner';}));
    $('accept-slot').addEventListener('click',()=>action(()=>{session.bindSlot($('slot').value.trim(),$('slot-confirm').checked);return 'Slot';}));
    $('read').addEventListener('click',()=>{if(!stopped)return action(()=>session.readPrepared());});
    $('get').addEventListener('click',()=>{if(!stopped)return action(()=>session.getRequest());});
    $('submit').addEventListener('click',()=>{if(!stopped)return action(()=>session.submitRequest($('consent').checked));});
    function clear(){generation++;session.clear();$('google').replaceChildren();$('login-consent').checked=false;
      try{google?.cancel();}catch{/* local clear still completes */}status(session.view().unknown?'UnknownOutcome':'Canceled');render();}
    $('cancel').addEventListener('click',clear);
    $('login-consent').addEventListener('change',render);$('consent').addEventListener('change',render);
    win.addEventListener('pagehide',clear);
    win.addEventListener('pageshow',event=>{if(event.persisted){clear();stopped=true;render();}});
    win.addEventListener('beforeunload',event=>{if(session.view().submitSpent){event.preventDefault();event.returnValue='';}});
    for(const [gate,id] of [['identity','gate-identity'],['protectedRead','gate-read'],['getRequest','gate-get'],['submitRequest','gate-submit']])
      $(id).textContent=config.gates?.[gate]===true?'W konfiguracji: dopuszczony etap':'Wyłączony';
    status(session.view().configured?'Configured':'Offline');render();
    // No session/token object is returned or published for browser debugging.
    return Object.freeze({dispose:clear});
  }
  globalThis.GEQAUI=Object.freeze({mount,makeGoogleLoader});
})();