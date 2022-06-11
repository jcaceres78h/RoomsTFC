import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uMascota'
})
export class UMascotaPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.room_pet)

    }else{ return users}
}

}
