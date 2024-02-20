import { Component, Input } from '@angular/core';
import CartItem from '../models/CartItem';
import { blankProduct } from '../models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() cartItem: CartItem

  constructor() {
    this.cartItem = { product: blankProduct, quantity: 0, dateAdded: 0 }
  }
}
