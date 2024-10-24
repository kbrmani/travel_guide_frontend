import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/authService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  onRegister() {
    const body = { username: this.username, email: this.email, password: this.password };

    this.http.post('http://localhost:5000/api/auth/register', body).subscribe({
      next: (response: any) => {
        alert('Registration successful');
        console.log(response);
        this.successMessage = 'Registration successful!';
        this.authService.register();
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
        this.successMessage = 'Registration failed. Please try again.';
      },
      complete: () => {
        console.log('Registration request completed');
      }
    });
  }
}
