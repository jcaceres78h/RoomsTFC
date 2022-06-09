import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calefaccion'
})
export class CalefaccionPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_heating))
      return rooms.filter(room => propiedad == room.has_heating)

    }else{ return rooms}
  }

}
