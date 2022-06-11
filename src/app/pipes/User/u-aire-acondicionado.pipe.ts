import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uAireAcondicionado'
})
export class UAireAcondicionadoPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_air_conditioning)

    }else{ return users}
}

}
