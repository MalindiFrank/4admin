import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor() {}

  async getAllProducts(): Promise<void> {
    try {
      let response = fetch(this.apiUrl);
      return (await response).json();
    } catch (error) {
      console.log('ErroR: ', error);
    }
  }

  async addProduct(product: object): Promise<any> {
    try {
      let response = fetch(this.apiUrl, {
        method: 'POST',
        body: JSON.stringify(product),
      })
      return (await response).json()
    } catch (error) {
      console.log('ErroR: ', error);
    }
  }

  async getOneProduct(id: number): Promise<void> {
    try {
      let response = fetch(`${this.apiUrl}/${id}`);
      return (await response).json();
    } catch (error) {
      console.log('ErroR: ', error);
    }
  }

  async deleteProduct(id: number): Promise<void> {
    try {
      let response = fetch(`${this.apiUrl}/${id}`, {
        method: 'DELETE',
      })
    return (await response).json()
    } catch (error) {
      console.log('ErroR: ', error);
    }
  }

  async updateProduct(id: number, product: object): Promise<void> {
    try {
      let response = fetch(`${this.apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
      })
    return (await response).json()
    } catch (error) {
      console.log('ErroR: ', error);
    }
  }

  async getAllUsers(): Promise<any> {
    try {
      let response = fetch('https://fakestoreapi.com/users');
      return (await response).json();
    } catch (error) {
      console.log('ErroR: ', error);
    }
  }
}


const application= () => {
  return (
    <div>
    
    </div>
  )
}
export default application;
