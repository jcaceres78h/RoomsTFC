import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uTipoCama'
})
export class UTipoCamaPipe implements PipeTransform {

  transform(users: any[], num:number): any[] {
    if(users && users.length && num != 0){
      return users.filter(user => num == user.bed_type)

    }else{ return users}

}

}
