import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: any = {};

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<any> {
    this.product = await this.getProduct();
  }

  async getProduct() {
    console.log(await this.apiService.getOneProduct(4));
    return await this.apiService.getOneProduct(4);
  }
}
