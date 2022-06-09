import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portero'
})
export class PorteroPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_doorman))
      return rooms.filter(room => propiedad == room.has_doorman)

    }else{ return rooms}
  }

}
