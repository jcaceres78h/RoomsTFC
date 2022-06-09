import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generoCompanero'
})
export class GeneroCompañeroPipe implements PipeTransform {

  transform(rooms: any[], propiedad:number): any[] {
    if(rooms && rooms.length && propiedad!=0){
     // console.log(rooms.filter(room => propiedad == room.roommate_gender))
      return rooms.filter(room => propiedad == room.roommate_gender)

    }else{ return rooms}
  }

}
