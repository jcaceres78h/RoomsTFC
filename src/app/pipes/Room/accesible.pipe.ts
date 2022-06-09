import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accesible'
})
export class AccesiblePipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.is_accessibility))
      return rooms.filter(room => propiedad == room.is_accessibility)

    }else{ return rooms}
  }

}
