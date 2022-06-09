import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vistaPrivada'
})
export class VistaPrivadaPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_private_view))
      return rooms.filter(room => propiedad == room.has_private_view)

    }else{ return rooms}
  }

}
