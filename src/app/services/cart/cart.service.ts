import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  getCartItems(): any[] {
    return this.cartItems;
  }
  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartCount(): number {
    return this.cartItems.length++;
  }
}
