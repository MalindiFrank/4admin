import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  addProductForm: FormGroup<{
    title: FormControl<string | null>;
    price: FormControl<null>;
    description: FormControl<string | null>;
    image: FormControl<string | null>;
    category: FormControl<string | null>;
  }>;

  errorMessage: string | null = null;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    //initialize form validation **incomplete
    this.addProductForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
  }

  //getter for easy access to form controls, **more to note
  get f() {
    return this.addProductForm.controls;
  }

  async onSubmit() {
    const { title, price, description, image, category } =
      this.addProductForm.value;

    await this.apiService.addProduct({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    });
  }
}
