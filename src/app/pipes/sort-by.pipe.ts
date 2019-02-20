import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(users: any, paramToSort?: string, direction?: string): Array<object> {
    if (!paramToSort) {
      return users;
    } else if (paramToSort && !direction) {
      return users;
    } else if (paramToSort === 'suite' && direction === 'down') {
      return users.sort((a, b) => a.address.suite - b.address.suite);       // Suite down sort
    } else if (paramToSort === 'suite' && direction === 'up') {
      return users.sort((a, b) => b.address.suite - a.address.suite);       // Suite up sort
    } else if (paramToSort === 'age' && direction === 'down') {
      return users.sort((a, b) => a.age - b.age);                           // Age down sort
    } else if (paramToSort === 'age' && direction === 'up') {
      return users.sort((a, b) => b.age - a.age);                           // Age up sort
    } else if (paramToSort === 'zipcode' && direction === 'down') {
      return users.sort((a, b) => a.address.zipcode - b.address.zipcode);   // Zipcode down sort
    } else if (paramToSort === 'zipcode' && direction === 'up') {
      return users.sort((a, b) => b.address.zipcode - a.address.zipcode);   // Zipcode up sort
    }
  }

}
