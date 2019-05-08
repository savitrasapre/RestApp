import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/Models/card.model';

@Pipe({
  name: 'sortCards'
})
export class SortCardsPipe implements PipeTransform {
  //sorting by property of the Card array.
  transform(value: Array<Card>, property: string): any {
    return value.sort((c1,c2) => {
      return c1[property] - c2[property];
    });
  }

}
