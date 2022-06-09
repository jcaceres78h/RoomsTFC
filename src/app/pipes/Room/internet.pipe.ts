import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'internet'
})
export class InternetPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_internet))
      return rooms.filter(room => propiedad == room.has_internet)

    }else{ return rooms}
  }

}
