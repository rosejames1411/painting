import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf , CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Painting } from './model/painting.model';
import { PaintingCardComponent } from './painting-card/painting-card';
import { PaintingStatusPipe } from './pipes/painting-status-pipe';
import { PaintingService } from './services/painting';
import { HomeComponent } from './pages/home/home';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive
} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NgIf , FormsModule , NgFor ,PaintingCardComponent ,CommonModule ,PaintingStatusPipe , RouterLink,
    RouterLinkActive], //knows(commom module) it can use painting card selector,AppComponent is allowed to use PaintingCardComponent.
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class AppComponent implements OnInit {
shopName = 'Rose Art';
shopStatus = 'Taking painting orders';
message = '';
userName = '';
categories = ['Portraits', 'Nature', 'Abstract'];
selectedPainting: Painting | null = null;
constructor(private paintingService: PaintingService) {}
ngOnInit(): void {
  this.paintings = this.paintingService.getPaintings();
  console.log('Rose Art component initialized');
}
  showMessage() {
    this.message = 'Welcome to Rose Art!';
  }
 

  selectPainting(painting: Painting) {
    const selected = this.paintingService.getPaintingByTitle(
      painting.title
    );
  
    if (selected) {
      this.selectedPainting = selected;
    }
  }

  today = new Date();

  //paintings is a array containing Painting objects
  paintings: Painting[] = [];
}