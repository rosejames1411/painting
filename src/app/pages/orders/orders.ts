import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CustomerOrder {
  orderId: string;
  paintingName: string;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.html',
  styleUrl: './orders.scss'
})
export class OrdersComponent {

  orders: CustomerOrder[] = [];

}