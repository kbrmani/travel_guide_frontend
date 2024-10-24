import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, HomeComponent, RegisterComponent, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // <-- Corrected to styleUrls
})
export class AppComponent {}
