import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mascotas'
})
export class MascotasPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.room_pet))
      return rooms.filter(room => propiedad == room.room_pet)

    }else{ return rooms}
  }

}
