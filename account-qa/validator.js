(() => {
'use strict';
// Pure offline validation. No transport, storage, credentials or service calls.
// A true result validates supplied data only; it does not prove that any service was contacted.
const TARGET = Object.freeze({
  projectId: 'a34f5424-ed4d-455d-8b42-623761f66254',
  environmentId: '908a5cbf-5ac3-4f0c-a777-2e440ec51c3e',
  environmentName: 'account-deletion-qa', moduleName: 'GemEngineDeletionRequestsQA'
});
const KEY = 'ge_account_deletion_request_v1';
const fields = ['schema','projectId','environmentId','playerId','slotId','status','requestId','requestedUtc','scope','noticeVersion'].sort();
const fail = reason => ({ valid: false, reason, mayExecute: false });
function validateReady(value, expected) {
  try {
    if (!expected || expected.projectId !== TARGET.projectId || expected.environmentId !== TARGET.environmentId
        || expected.environmentName !== TARGET.environmentName) return fail('WrongTarget');
    if (typeof expected.playerId !== 'string' || !/^[A-Za-z0-9_-]{1,128}$/.test(expected.playerId)
        || typeof expected.slotId !== 'string' || !/^[a-f0-9]{32}$/.test(expected.slotId) || /^0+$/.test(expected.slotId)) return fail('MissingReviewedIdentityOrSlot');
    if (!value || typeof value !== 'object' || Array.isArray(value)
        || JSON.stringify(Object.keys(value).sort()) !== JSON.stringify(fields)) return fail('WrongFields');
    if (new TextEncoder().encode(JSON.stringify(value)).length > 2048) return fail('TooLarge');
    if (value.schema !== 1 || value.projectId !== expected.projectId || value.environmentId !== expected.environmentId
        || value.playerId !== expected.playerId || value.slotId !== expected.slotId) return fail('WrongBinding');
    if (value.status !== 'Ready' || value.requestId !== '' || value.requestedUtc !== 0
        || value.scope !== 'GameAccountAndAssociatedData' || value.noticeVersion !== '') return fail('NotEmptyReady');
    return { valid: true, reason: 'ShapeOnlyNotServiceEvidence', mayExecute: false };
  } catch { return fail('InvalidInput'); }
}
function validatePreparedReadback(reply, expected) {
  try {
    if (!reply || !Array.isArray(reply.results) || reply.results.length !== 1 || reply.links?.next) return fail('IncompleteOrUnexpectedResults');
    const item = reply.results[0];
    if (item.key !== KEY || typeof item.writeLock !== 'string' || !item.writeLock.trim() || item.writeLock.length > 1024) return fail('MissingKeyOrWriteLock');
    const result = validateReady(item.value, expected);
    return result.valid ? { ...result, writeLockPresent: true, recordMatches: true } : result;
  } catch { return fail('InvalidInput'); }
}
globalThis.GEQAValidator = Object.freeze({ TARGET, KEY, validateReady, validatePreparedReadback });
})();
