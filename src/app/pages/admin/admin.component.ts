import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { DashboardComponent } from "../../components/dashboard/dashboard.component";

@Component({
  selector: 'app-admin',
  imports: [ DashboardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  async getAllProducts() {
    let products = await this.apiService.getAllProducts();
    console.log(products);
  }

  async getOneProduct() {
    let res = await this.apiService.getOneProduct(1);
    console.log(res);
  }

  async addProduct() {
    let res = await this.apiService.addProduct({
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    });
    console.log(res);
  }

  async updateProduct() {
    let res = await this.apiService.updateProduct(9, {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    });
    console.log(res);
  }

  async deleteProduct() {
    let res = await this.apiService.deleteProduct(2);
    console.log(res);
  }

  async getUsers() {
    let users = await this.apiService.getAllUsers();
    console.log(users);
  }
}
