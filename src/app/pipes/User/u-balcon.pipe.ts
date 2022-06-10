import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uBalcon'
})
export class UBalconPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_balcony)

    }else{ return users}
}

}
