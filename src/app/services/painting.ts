import { Injectable } from '@angular/core';
import { Painting } from '../model/painting.model';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  private paintings: Painting[] = [
    {
      title: 'Gilded Petals Portrait',
      price: 6000,
      category: 'Portrait',
      description: 'A textured acrylic portrait in monochrome with sculpted gold petals, signed by the artist.',
      width: 200,
      available: true
    },
    {
      title: 'Hand-Sketched Portrait',
      price: 4500,
      category: 'Portrait',
      description: 'A finely detailed graphite portrait capturing an intimate embrace, rendered entirely by hand.',
      width: 200,
      available: true
    },
    {
      title: 'Painted T-Shirt Art',
      price: 1200,
      category: 'Custom',
      description: 'Custom hand-painted fabric art on apparel, featuring a bold Spider-Man inspired design.',
      width: 200,
      available: true
    },
    {
      title: 'Botanical Sneaker Art',
      price: 1800,
      category: 'Custom',
      description: 'Hand-painted leaf and botanical line art on classic high-top sneakers.',
      width: 200,
      available: true
    },
    {
      title: 'Starry Night Embrace',
      price: 2800,
      category: 'Landscape',
      description: 'A hand-illustrated couple walking through a golden field beneath a swirling Van Gogh-inspired starry sky.',
      width: 200,
      available: true
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
