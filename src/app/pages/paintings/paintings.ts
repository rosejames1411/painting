import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Painting } from '../../model/painting.model';
import { PaintingService } from '../../services/painting';
import { PaintingCardComponent } from '../../painting-card/painting-card';

@Component({
  selector: 'app-paintings',
  imports: [
    CommonModule,
    PaintingCardComponent
  ],
  templateUrl: './paintings.html',
  styleUrl: './paintings.scss'
})
export class PaintingsComponent implements OnInit {

  paintings: Painting[] = [];

  constructor(private paintingService: PaintingService) {}

  ngOnInit(): void {
    this.paintings = this.paintingService.getPaintings();
  }

}