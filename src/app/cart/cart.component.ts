import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import CartItem from '../models/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cart: CartItem[] = []
  paymentTotal: number = 0
  prettyPaymentTotal: string = '$0.00'

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.setState()
  }

  private setState(): void {
    this.cart = this.cartService.getCartItems();
    this.paymentTotal =  this.cartService.getPaymentTotal();
    this.prettyPaymentTotal = `$${this.paymentTotal.toFixed(2)}`;
  }

  onAmountChange(cartItem: CartItem): void {
    console.log(`New amount ${cartItem.quantity}`)
    this.cartService.update(cartItem.product, cartItem.quantity);
    this.setState();
    setTimeout(() => { alert('Cart updated!'); }, 200);
  }

  onRemove(cartItem: CartItem): void {
    this.cartService.remove(cartItem.product);
    this.setState();
    setTimeout(() => { alert('Item removed!'); }, 200);
  }

  onSubmit(): void {
    this.cartService.emptyCart();
    this.router.navigate(['/order-confirmation']);
  }
}
