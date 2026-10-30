import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Painting } from '../../model/painting.model';
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.scss'
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;

  cartItems: Painting[] = [];
  total = 0;

  orderPlaced = false;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [
        Validators.required,
        Validators.pattern(/^[1-9][0-9]{5}$/)
      ]]
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();

    if (this.cartItems.length === 0) {
      this.router.navigate(['/cart']);
    }
  }
  get nameControl() {
    return this.checkoutForm.get('customerName');
  }
  get emailControl() {
    return this.checkoutForm.get('email');
  }
  get phoneControl() {
    return this.checkoutForm.get('phone');
  }
  placeOrder(): void {

    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }
  
    this.orderPlaced = true;
  
    console.log('Customer Details:', this.checkoutForm.value);
    console.log('Cart Items:', this.cartItems);
    console.log('Total Amount:', this.total);
  
  }
}