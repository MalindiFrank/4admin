import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

    products: any = []
  
    constructor(private apiService: ApiService) {}
  
    async ngOnInit(): Promise<any> {
      this.products = await this.getProducts()
    }
  
    async getProducts() {
      console.log((await this.apiService.getAllProducts()))
      return (await this.apiService.getAllProducts())
    }

}
