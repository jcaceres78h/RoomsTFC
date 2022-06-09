import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localidad'
})
export class LocalidadPipe implements PipeTransform {

  transform(users: any[], propiedad:string): any[] {
    if(users && users.length && propiedad != ""){
      return users.filter(user => propiedad == user.locality)

    }else{ return users}
  }

}
