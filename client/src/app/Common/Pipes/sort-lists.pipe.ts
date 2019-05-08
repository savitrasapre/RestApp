import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'src/app/Models/list.model';

@Pipe({
  name: 'sortLists'
})
export class SortListsPipe implements PipeTransform {
  //only takes number type property
  transform(value: Array<List>, property : string): any {
    return value.sort((l1,l2) => {
              return l1[property] - l2[property];
            });
  }
}
