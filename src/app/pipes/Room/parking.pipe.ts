import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parking'
})
export class ParkingPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_parking))
      return rooms.filter(room => propiedad == room.has_parking)

    }else{ return rooms}
  }

}
