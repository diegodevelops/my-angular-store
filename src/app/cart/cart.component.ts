import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import CartItem from '../models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart: CartItem[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCartItems();
  }
}
