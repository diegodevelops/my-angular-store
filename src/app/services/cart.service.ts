import { Injectable } from '@angular/core';
import CartItem from '../models/CartItem';
import Product from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartMap: {[productId: number]: CartItem} = {}

  constructor() { }

  getCartItems(): CartItem[] {
    let items = [];
    for (const [id, item] of Object.entries(this.cartMap)) {
      items.push(item);
    }

    items.sort( (a, b) => {  return a.dateAdded - b.dateAdded })
    return items;
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

    let cartItem = this.cartMap[product.id]
    if (cartItem) {
      this.cartMap[product.id] = { 
        product: product,
        quantity: cartItem.quantity + quantity,
        dateAdded: cartItem.dateAdded
      }
    }
    else {
      const dateAdded = (new Date()).getTime();
      this.cartMap[product.id] = { product, quantity, dateAdded }
    }

  }
}
