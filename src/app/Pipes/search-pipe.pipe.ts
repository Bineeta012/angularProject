import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(item: any[],searchText:string): any[]{

    if(!item){
      return []
    }
    if(!searchText){
      return item
    }

    return item.filter(data=>{
      return data.toLowerCase().includes(searchText)
    })
  }
  }


