import { Pipe, PipeTransform } from '@angular/core';
import { Card } from 'src/app/Models/card.model';
import { List } from 'src/app/Models/list.model';

@Pipe({
  name: 'filterCards'
})
export class FilterCardsPipe implements PipeTransform {

  transform(value: Array<Card>, inList: List,updatePipeCount: number): Array<Card> {
    console.log("running filter card pipe " + updatePipeCount);
    return value.filter(card => card.idList == inList._id);
  }

}
