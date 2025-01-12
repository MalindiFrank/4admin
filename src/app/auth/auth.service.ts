import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  async onLogin() {
    try {
      
    } catch (error) {
      
    }

  }

  onLogout () {
    this.router.navigate(['/login'])
  }
}
