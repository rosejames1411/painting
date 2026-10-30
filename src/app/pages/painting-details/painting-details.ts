import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Painting } from '../../model/painting.model';
import { PaintingService } from '../../services/painting';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-painting-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './painting-details.html',
  styleUrl: './painting-details.scss'
})
export class PaintingDetailsComponent implements OnInit {

  painting: Painting | undefined;

  constructor(
    private route: ActivatedRoute,
    private paintingService: PaintingService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');

    if (title) {
      this.painting = this.paintingService.getPaintingByTitle(title);
    }
  }
  addToCart(): void {
    if (!this.painting || !this.painting.available) {
      return;
    }
  
    this.cartService.addItem(this.painting);
  
    this.router.navigate(['/cart']);
  }
}