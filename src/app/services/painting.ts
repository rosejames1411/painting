import { Injectable } from '@angular/core';
import { Painting } from '../model/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  private paintings: Painting[] = [
    {
      title: 'Rose Garden',
      price: 2500,
      category: 'Nature',
      description: 'A beautiful painting inspired by a peaceful rose garden.',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
      width: 200,
      available: true
    },
    {
      title: 'Sunset',
      price: 3000,
      category: 'Landscape',
      description: 'A warm sunset painting with a calm and peaceful atmosphere.',
      image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7',
      width: 200,
      available: true
    },
    {
      title: 'Portrait',
      price: 5000,
      category: 'Portrait',
      description: 'A detailed hand-painted portrait.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      width: 200,
      available: false
    }
  ];

  getPaintings(): Painting[] {
    return this.paintings;
  }
  getPaintingByTitle(title: string): Painting | undefined {
    return this.paintings.find(
      painting => painting.title === title
    );
  }
}