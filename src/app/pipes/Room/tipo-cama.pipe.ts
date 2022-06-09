import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoCama'
})
export class TipoCamaPipe implements PipeTransform {

  transform(rooms: any[], propiedad:number): any[] {
    if(rooms && rooms.length && propiedad!=0){
     // console.log(rooms.filter(room => propiedad == room.bed_type))
      return rooms.filter(room => propiedad == room.bed_type)

    }else{ return rooms}
  }

}
