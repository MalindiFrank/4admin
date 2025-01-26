import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule,
    RouterModule
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activeView = 'dashboardd';
  }

  isNavOpen: boolean = false;
  activeView: string | null = null;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

  handleView(view: string): void {
    this.activeView = view;
    this.toggleNav();
  }

  onLogout(): void {
    location.reload();
    setTimeout(() => this.router.navigate(['/login']), 1200);
  }
}
