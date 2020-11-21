import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtermsg'
})
export class FiltermsgPipe implements PipeTransform {

  transform(items: any[], searchedMsg: any): unknown {
    if (!searchedMsg) {
      return items
    }else{
      let searcheditem = items.filter(m=>m.message.toLowerCase().includes(searchedMsg))
      return searcheditem;
    }
  }

}
