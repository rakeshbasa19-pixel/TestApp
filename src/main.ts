import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './app/auth/auth-config';

async function bootstrap() {
  const msalInstance = new PublicClientApplication(msalConfig);

  // 🔴 MUST AWAIT THIS
  await msalInstance.initialize();

  await bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes),
      {
        provide: MSAL_INSTANCE,
        useValue: msalInstance
      },
      MsalService
    ]
  });
}

bootstrap().catch(err => console.error(err));
