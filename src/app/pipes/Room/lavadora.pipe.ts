import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lavadora'
})
export class LavadoraPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_whashing_machine))
      return rooms.filter(room => propiedad == room.has_whashing_machine)

    }else{ return rooms}
  }

}
