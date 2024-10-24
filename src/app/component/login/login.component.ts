import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/authService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  onLogin() {
    const body = { email: this.email, password: this.password };

    this.http.post('http://localhost:5000/api/auth/login', body).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        this.successMessage = 'Login successful!';
        this.authService.login();
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.successMessage = 'Login failed. Please try again.';
      },
      complete: () => {
        console.log('Login request completed');
      }
    });
  }
}
