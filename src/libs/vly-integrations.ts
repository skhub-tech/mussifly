<<<<<<< HEAD
// VLY Integrations Configuration
// See /integrations.md for usage documentation

import { createVlyIntegrations } from '@vly-ai/integrations';

export const vly = createVlyIntegrations({
  deploymentToken: process.env.VLY_INTEGRATION_KEY!,
  debug: process.env.NODE_ENV === 'development'
});
=======
// VLY Integrations Configuration
// See /integrations.md for usage documentation

import { createVlyIntegrations } from '@vly-ai/integrations';

export const vly = createVlyIntegrations({
  deploymentToken: process.env.VLY_INTEGRATION_KEY!,
  debug: process.env.NODE_ENV === 'development'
});
>>>>>>> 3c0bdd2eae304b2a15a2ff0ab5a6a4d84aa1b791
