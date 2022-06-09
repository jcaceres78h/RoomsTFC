import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parejas'
})
export class ParejasPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.room_couples))
      return rooms.filter(room => propiedad == room.room_couples)

    }else{ return rooms}
  }

}
