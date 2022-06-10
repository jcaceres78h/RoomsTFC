import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uPortero'
})
export class UPorteroPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_doorman)

    }else{ return users}
}

}
