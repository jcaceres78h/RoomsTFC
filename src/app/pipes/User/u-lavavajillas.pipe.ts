import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uLavavajillas'
})
export class ULavavajillasPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_dishwasher)

    }else{ return users}
}

}
