import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: '075b41d9-c1d9-48bf-bb60-e35d2e482040',
    authority: 'https://login.microsoftonline.com/common',
   redirectUri: 'http://localhost:4200/auth-callback'
  },
  cache: {
    cacheLocation: 'localStorage'
  }
};

export const loginRequest = {
  scopes: ['user.read']
};
