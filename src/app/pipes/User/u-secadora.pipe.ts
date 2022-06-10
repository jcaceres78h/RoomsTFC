import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSecadora'
})
export class USecadoraPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_drying_machine)

    }else{ return users}

}

}
