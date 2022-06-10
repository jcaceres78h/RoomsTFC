import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uBanoPrivado'
})
export class UBanoPrivadoPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_private_bath)

    }else{ return users}

}

}
