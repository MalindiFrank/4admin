import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product: any = {};
  productId: number | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  async ngOnInit(): Promise<any> {
    this.productId = this.route.snapshot.params['id'];
    console.log(this.productId);

    this.product = await this.getProduct(this.productId);
  }

  async getProduct(id: number | null) {
    if (id) {
      return await this.apiService.getOneProduct(id);
    }
  }
}
