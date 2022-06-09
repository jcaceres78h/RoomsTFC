import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fumador'
})
export class FumadorPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.room_smoke))
      return rooms.filter(room => propiedad == room.room_smoke)

    }else{ return rooms}
  }
}
