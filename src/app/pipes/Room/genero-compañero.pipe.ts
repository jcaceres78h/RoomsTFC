import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generoCompanero'
})
export class GeneroCompa├▒eroPipe implements PipeTransform {

  transform(rooms: any[], propiedad:number): any[] {
    if(rooms && rooms.length && propiedad!=10){
     // console.log(rooms.filter(room => propiedad == room.roommate_gender))
      return rooms.filter(room => propiedad == room.roommate_gender)

    }else{ return rooms}
  }

}
