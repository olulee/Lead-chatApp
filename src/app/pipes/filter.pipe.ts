import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchItem: any): unknown {
    console.log(searchItem)
    console.log(items)
    if (!searchItem) {
      return items
    }else{
      let users = items.filter(n=>n.name)
      console.log(users)
      let filteredItems = users.filter(src=>src.name.toLowerCase().includes(searchItem))
      return filteredItems
    }

  }

}
