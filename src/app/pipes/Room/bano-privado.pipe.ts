import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'banoPrivado'
})
export class BanoPrivadoPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_private_bath))
      return rooms.filter(room => propiedad == room.has_private_bath)

    }else{ return rooms}
  }

}
