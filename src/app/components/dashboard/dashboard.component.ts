import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


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
