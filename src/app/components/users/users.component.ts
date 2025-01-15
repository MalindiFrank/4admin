import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule,],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users: any = []

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<any> {
    this.users = await this.getUsers()
  }

  async getUsers() {
    console.log((await this.apiService.getAllUsers()))
    return (await this.apiService.getAllUsers())
  }

}
