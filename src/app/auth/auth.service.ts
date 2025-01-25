import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  async onLogin(username: string, password: string): Promise<any> {
    let token: any = null;
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        token = json;
      })
      .catch((error) => console.error(error));

    return token;
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
}
