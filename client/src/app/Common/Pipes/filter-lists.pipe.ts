import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'src/app/Models/list.model';

@Pipe({
  name: 'filterLists'
})
export class FilterListsPipe implements PipeTransform {

  transform(value: Array<List>, isClosed: boolean, updateCount: number): Array<List> {
    console.log("running filter pipe "+ isClosed + " " + updateCount);
    
    return value.filter(l => l.isClosed == isClosed);
  }

}
