import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uAmueblada'
})
export class UAmuebladaPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.is_furnished)

    }else{ return users}

}

}
