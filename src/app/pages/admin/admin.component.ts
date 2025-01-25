import { Component } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../../components/products/products.component';
import { AddProductComponent } from '../../components/add-product/add-product.component';
import { UsersComponent } from '../../components/users/users.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [
    CommonModule,
    DashboardComponent,
    RouterModule,
    ProductsComponent,
    AddProductComponent,
    UsersComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor() {}

  ngOnInit(): void {
    this.handleView('dashboard');
  }

  isNavOpen: boolean = false;
  activeView: string | null = null;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  handleView(view: string): void {
    this.activeView = view;
  }
}
