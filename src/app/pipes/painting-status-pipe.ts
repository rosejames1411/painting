import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paintingStatus', //name we eill use in html
  standalone: true
})
export class PaintingStatusPipe implements PipeTransform {

  transform(available: boolean): string {

    if (available) {
      return 'Available';
    }

    return 'Sold Out';
  }

}