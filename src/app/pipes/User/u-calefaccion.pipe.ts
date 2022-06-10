import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uCalefaccion'
})
export class UCalefaccionPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_heating)

    }else{ return users}
}

}
