import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //getter.. easy access to form controls, **more to note
  get f() {
    return this.loginForm.controls;
  }

  async onLogin() {
    try {
      const { email, password }: any = this.loginForm.value;
      const token = await this.authService.onLogin(email, password);
      if (token) {
        localStorage.setItem('authToken', token);
        this.router.navigate(['/admin']);
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
