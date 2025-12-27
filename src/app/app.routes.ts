import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthCallbackComponent } from './auth/auth-callback.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'auth-callback', component: AuthCallbackComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
