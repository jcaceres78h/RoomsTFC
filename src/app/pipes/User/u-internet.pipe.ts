import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uInternet'
})
export class UInternetPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_internet)

    }else{ return users}

}

}
