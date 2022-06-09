import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aireAcondicionado'
})
export class AireAcondicionadoPipe implements PipeTransform {

  transform(rooms: any[], propiedad:boolean): any[] {
    if(rooms && rooms.length && propiedad){
     // console.log(rooms.filter(room => propiedad == room.has_air_conditioning))
      return rooms.filter(room => propiedad == room.has_air_conditioning)

    }else{ return rooms}
  }

}
