import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, AdminComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  errorMessage: string | null = null;
  activeView: string | null = null;

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

  ngOnInit(): void {
    this.activeView = 'login';
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
        this.router.navigate(['/dashboard']);
        this.handleView();
      }
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  handleView(): void {
    this.activeView = 'admin';
  }
}
