import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Painting } from '../model/painting.model';

@Component({
  selector: 'app-painting-card',
  imports: [NgIf],
  templateUrl: './painting-card.html',
  styleUrl: './painting-card.scss'
})
export class PaintingCardComponent {

  @Input() painting!: Painting;
  @Output() paintingSelected = new EventEmitter<Painting>();
  viewPainting() {
    this.paintingSelected.emit(this.painting);
  }
}