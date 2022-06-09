import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amueblada'
})
export class AmuebladaPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.is_furnished))
      return rooms.filter(room => propiedad == room.is_furnished)

    }else{ return rooms}
  }

}
