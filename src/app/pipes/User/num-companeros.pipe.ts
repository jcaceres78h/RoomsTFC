import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numCompaneros'
})
export class NumCompanerosPipe implements PipeTransform {

  transform(users: any[], num:number): any[] {
    if(users && users.length && num != 0){
      return users.filter(user => num == user.locality)

    }else{ return users}
  }

}
