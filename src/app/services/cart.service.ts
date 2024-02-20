import { Injectable } from '@angular/core';
import CartItem from '../models/CartItem';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartMap: {[productId: number]: CartItem} = {}

  constructor() { }

  emptyCart(): void {
    this.cartMap = {};
  }

  getCartItems(): CartItem[] {
    let items = [];
    for (const [id, item] of Object.entries(this.cartMap)) {
      items.push(item);
    }

    items.sort( (a, b) => {  return a.dateAdded - b.dateAdded })
    return items;
  }

  getPaymentTotal(): number {
    let total = 0;
    for (const [id, item] of Object.entries(this.cartMap)) {
      total = total + item.product.price*item.quantity;
    }
    return total;
  }

  getTotalCount(): number {
    let count = 0;
    for (const [id, item] of Object.entries(this.cartMap)) {
      count = count + item.quantity
    }
    return count;
  }

  remove(product: Product): void {
    delete this.cartMap[product.id]
  }

  update(product: Product, quantity: number): void {

    if (quantity===0) {
      delete this.cartMap[product.id]
      return;
    }

    const cartItem = this.cartMap[product.id];

    const dateAdded = (cartItem) 
      ? cartItem.dateAdded 
      : (new Date()).getTime();

    this.cartMap[product.id] = { product, quantity, dateAdded }
  }
}
