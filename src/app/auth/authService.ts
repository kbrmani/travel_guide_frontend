import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private isRegistered = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  register() {
    this.isRegistered = true;
  }

  checkLogin() {
    return this.isLoggedIn;
  }

  checkRegister() {
    return this.isRegistered;
  }
}
