import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascensor'
})
export class AscensorPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_elevator))
      return rooms.filter(room => propiedad == room.has_elevator)

    }else{ return rooms}
  }

}
