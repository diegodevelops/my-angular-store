import { Component, Inject, Input } from '@angular/core';
import Product from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: Product

  constructor() {
    this.product = { 
      id: 0,
      price: 0,
      name: '',
      url: '',
      description: ''
    }
  }
}
