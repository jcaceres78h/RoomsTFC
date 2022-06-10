import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uJardin'
})
export class UJardinPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_garden)

    }else{ return users}
}

}
