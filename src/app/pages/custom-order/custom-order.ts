import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-order',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './custom-order.html',
  styleUrl: './custom-order.scss'
})
export class CustomOrderComponent {
  selectedImage: File | null = null;
  sizePrices: Record<string, number> = {
    small: 0,
    medium: 500,
    large: 1000
  };
  orderSubmitted = false;
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
  
    const file = input.files?.[0];
  
    if (!file) {
      this.selectedImage = null;
      return;
    }
  
    if (!file.type.startsWith('image/')) {
      this.selectedImage = null;
      input.value = '';
      return;
    }
  
    this.selectedImage = file;
  }

  customOrderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.customOrderForm = this.formBuilder.group({
      customerName: ['', Validators.required],

      customerEmail: ['', [
        Validators.required,
        Validators.email
      ]],

      paintingType: ['', Validators.required],
      numberOfPeople: [1, [
        Validators.required,
        Validators.min(1),
        Validators.max(5)
      ]],
      preferredDate: [''],
      specialInstructions: [''],
      paintingSize: ['medium', Validators.required],

      description: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
    });

  }
  successMessage = '';

  submitOrder(): void {
    if (this.customOrderForm.invalid) {
      this.customOrderForm.markAllAsTouched();
      return;
    }
  
    console.log('Order details:', this.customOrderForm.value);
    console.log('Selected image:', this.selectedImage);
  
    this.orderSubmitted = true;
  
    this.successMessage =
      'Your custom painting request has been prepared successfully!';
  }
pricePerPerson = 1500;
get portraitPrice(): number {
  const numberOfPeople = Number(
    this.customOrderForm.get('numberOfPeople')?.value ?? 1
  );

  const paintingSize = String(
    this.customOrderForm.get('paintingSize')?.value ?? 'medium'
  );

  const sizeCharge = this.sizePrices[paintingSize] ?? 0;

  return (numberOfPeople * this.pricePerPerson) + sizeCharge;
}
get minimumDeliveryDate(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
get orderSummary() {
  return {
    customerName: this.customOrderForm.get('customerName')?.value,
    paintingType: this.customOrderForm.get('paintingType')?.value,
    numberOfPeople: this.customOrderForm.get('numberOfPeople')?.value,
    paintingSize: this.customOrderForm.get('paintingSize')?.value,
    estimatedPrice: this.portraitPrice
  };
}
}