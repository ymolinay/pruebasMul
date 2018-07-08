import {Pipe, PipeTransform} from '@angular/core';
import {Service} from '../../../models/service';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(list: Array<Service>, typeService?: number): any {
    console.log(typeService);
    if (typeService) {
      const newList = list.filter((item: Service) => {
        return item.type === typeService;
      });
      return newList;
    }
    return list;
  }

}
