import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/Models/user.model';

@Pipe({
  name: 'filterByString'
})
export class FilterByStringPipe implements PipeTransform {
  transform(value: Array<User>, usersToExclude: Array<String>): Array<User> {
    //return value.filter(it => it != usersToExclude);
    if(!usersToExclude) return value;
    
    let tempArray = value;

    usersToExclude.forEach(users => {

      let index = tempArray.findIndex(it => {
        return it.fullname == users;
      });

      tempArray.splice(index,1);

    });
    console.log(tempArray);
    
    return tempArray; 
  }
}
