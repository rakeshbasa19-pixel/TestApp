import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  template: `<p>Signing you in...</p>`
})
export class AuthCallbackComponent implements OnInit {

  constructor(
    private msalService: MsalService,
    private router: Router
  ) {
    console.log('[AuthCallback] constructor called');
  }

  async ngOnInit() {
    console.log('[AuthCallback] ngOnInit started');

    try {
      console.log('[AuthCallback] Calling handleRedirectPromise()');

      const result = await this.msalService.instance.handleRedirectPromise();

      console.log('[AuthCallback] Redirect result:', result);

      if (result?.account) {
        console.log('[AuthCallback] Account from redirect:', result.account);

        this.msalService.instance.setActiveAccount(result.account);
        console.log('[AuthCallback] Active account set');

        this.router.navigate(['/login']); // or /dashboard
        console.log('[AuthCallback] Navigating to /login');
        return;
      }

      console.log('[AuthCallback] No redirect result, checking existing accounts');

      const accounts = this.msalService.instance.getAllAccounts();
      console.log('[AuthCallback] Accounts from cache:', accounts);

      if (accounts.length > 0) {
        this.msalService.instance.setActiveAccount(accounts[0]);
        console.log('[AuthCallback] Active account set from cache');
      } else {
        console.warn('[AuthCallback] No accounts found');
      }

      console.log('[AuthCallback] Navigating to /login');
      this.router.navigate(['/login']);

    } catch (error) {
      console.error('[AuthCallback] Error occurred:', error);
      this.router.navigate(['/login']);
    }
  }
}
