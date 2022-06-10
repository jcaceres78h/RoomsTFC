import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uAscensor'
})
export class UAscensorPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_elevator)

    }else{ return users}

}

}
