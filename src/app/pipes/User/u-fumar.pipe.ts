import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uFumar'
})
export class UFumarPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.room_smoke)

    }else{ return users}
}

}
