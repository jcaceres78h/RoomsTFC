import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uVistaPrivada'
})
export class UVistaPrivadaPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_private_view)

    }else{ return users}

}

}
