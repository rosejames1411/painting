import { Injectable } from '@angular/core';
import { Painting } from '../model/painting.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Painting[] = [];

  getItems(): Painting[] {
    return [...this.cartItems];
  }

  addItem(painting: Painting): void {
    this.cartItems.push(painting);
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, painting) => total + painting.price,
      0
    );
  }
}