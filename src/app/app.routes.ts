import { Routes } from '@angular/router';
import { LoginComponent } from '../app/auth/login/login.component';
import { RegisterComponent } from '../app/auth/register/register.component';
import { EncryptComponent } from './components/encrypt/encrypt.component';
import { DecryptComponent } from './components/decrypt/decrypt.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

export const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: 'encrypt', component: EncryptComponent },
   { path: 'decrypt', component: DecryptComponent },
   { path: 'menu-principal', component: MenuPrincipalComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' }
];
