import { Component, Input } from '@angular/core';
import Product, { blankProduct } from '../models/Product';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrl: './product-quantity.component.css'
})
export class ProductQuantityComponent {
  @Input() product: Product

  constructor() {
    this.product = blankProduct;
  }
}
