import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent {

  registerForm: FormGroup;
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      confirmPassword: ['', Validators.required]
    });
  }

  register(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      this.successMessage = 'Passwords do not match.';
      return;
    }

    console.log('Registration details:', this.registerForm.value);

    this.successMessage =
      'Registration form completed. Backend integration is pending.';
  }
}