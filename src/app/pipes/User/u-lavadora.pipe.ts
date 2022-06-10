import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uLavadora'
})
export class ULavadoraPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_whashing_machine)

    }else{ return users}

}

}
