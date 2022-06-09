import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secadora'
})
export class SecadoraPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_drying_machine))
      return rooms.filter(room => propiedad == room.has_drying_machine)

    }else{ return rooms}
  }

}
