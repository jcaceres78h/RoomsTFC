import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jardin'
})
export class JardinPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_garden))
      return rooms.filter(room => propiedad == room.has_garden)

    }else{ return rooms}
  }

}
