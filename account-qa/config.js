(() => {
  'use strict';
  const config = {
    enabled: true, deploymentReviewed: true, originReviewed: true, oauthReviewed: true,
    publicOrigin: 'https://geostudiogames.github.io',
    projectId: 'a34f5424-ed4d-455d-8b42-623761f66254',
    environmentId: '908a5cbf-5ac3-4f0c-a777-2e440ec51c3e', environmentName: 'account-deletion-qa',
    moduleName: 'GemEngineDeletionRequestsQA',
    googleWebClientId: '779806693348-fgjd56dhqdjf8hk88gs8s3lurcqac18e.apps.googleusercontent.com',
    policyActivationReviewed: false, singleSubmitApproved: false,
    gates: { identity: true, protectedRead: true, getRequest: false, submitRequest: false }
  };
  Object.freeze(config.gates);
  globalThis.GEQA_CONFIG = Object.freeze(config);
})();