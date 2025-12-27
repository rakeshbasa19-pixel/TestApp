import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalService } from '@azure/msal-angular';
import { loginRequest } from '../app/auth/auth-config';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="text-align:center; margin-top:100px">
      <button (click)="loginWithSSO()">
        Sign in with Microsoft
      </button>
    </div>
  `
})
export class LoginComponent {

  constructor(private msalService: MsalService) {
    console.log('Login component loaded');
  }
loading = false;

loginWithSSO() {
  if (this.loading) return;
  this.loading = true;
  this.msalService.loginRedirect(loginRequest);
}

}
