import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { Painting } from '../../model/painting.model';


@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent implements OnInit {

  cartItems: Painting[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.refreshCart();
  }

  refreshCart(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  removeItem(index: number): void {
    this.cartService.removeItem(index);
    this.refreshCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.refreshCart();
  }
}