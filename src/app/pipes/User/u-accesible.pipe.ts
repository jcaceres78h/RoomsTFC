import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uAccesible'
})
export class UAccesiblePipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.is_accessibility)

    }else{ return users}
}

}
