import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balcon'
})
export class BalconPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_balcony))
      return rooms.filter(room => propiedad == room.has_balcony)

    }else{ return rooms}
  }

}
