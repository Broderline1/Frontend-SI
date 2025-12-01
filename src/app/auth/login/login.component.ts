import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false,
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private AuthService: AuthService, private router: Router) {}

  onSubmit() {
    this.AuthService.login({ email: this.email, password: this.password }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/menu-principal']);
      },
      error: (err) => {
        this.error = 'Credenciales incorrectas';
      }
    });
  }
}
