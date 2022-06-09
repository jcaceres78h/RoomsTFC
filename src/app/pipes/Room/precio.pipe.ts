import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(rooms: any[], precio_max:number, precio_min:number): any[] {
    if(rooms && rooms.length && precio_max !=0 && precio_min !=0){
     // console.log(rooms.filter(room => propiedad == room.room_smoke))
      return rooms.filter(room => (precio_max >= room.price) && (precio_min <= room.price))

    }else{ return rooms}
  }

}
