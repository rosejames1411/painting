import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent {

  customer = {
    name: 'Rose Art Customer',
    email: 'customer@example.com',
    phone: '9876543210'
  };

  isEditing = false;
  successMessage = '';

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [this.customer.name, Validators.required],
      email: [this.customer.email, [Validators.required, Validators.email]],
      phone: [this.customer.phone, [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]]
    });
  }

  startEditing(): void {
    this.successMessage = '';
    this.profileForm.setValue({
      name: this.customer.name,
      email: this.customer.email,
      phone: this.customer.phone
    });
    this.isEditing = true;
  }

  cancelEditing(): void {
    this.isEditing = false;
  }

  saveProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.customer = { ...this.profileForm.value };
    this.isEditing = false;
    this.successMessage = 'Your profile has been updated successfully.';
  }

  logout(): void {
    console.log('Logout functionality will be connected to backend.');
  }
}
