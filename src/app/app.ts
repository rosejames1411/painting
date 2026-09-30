import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NgIf , FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
shopName = 'Rose Art';
message = '';
userName = '';
categories = ['Portraits', 'Nature', 'Abstract'];

  showMessage() {
    this.message = 'Welcome to Rose Art!';
  }
}