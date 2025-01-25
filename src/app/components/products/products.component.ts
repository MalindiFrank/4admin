import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: any = [];

  popUpMsg: string | null = '';
  isPopUp: boolean = false;

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<any> {
    this.products = await this.getProducts();
  }

  async getProducts() {
    return await this.apiService.getAllProducts();
  }

  async deleleProduct(id: number) {
    if (id) {
      try {
        this.products.splice(id - 1, 1);
        await this.apiService.deleteProduct(id);
        return this.popUp('User deleted succesfully!');
      } catch (error) {
        this.popUp('User not deleted!');
        console.error('Error: ', error);
      }
    }
  }

  popUp(msg: string) {
    this.popUpMsg = msg;
    this.isPopUp = true;
    setTimeout(() => (this.isPopUp = false), 2999);
  }
}
