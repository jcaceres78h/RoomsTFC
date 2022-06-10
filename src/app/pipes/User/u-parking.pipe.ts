import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uParking'
})
export class UParkingPipe implements PipeTransform {

  transform(users: any[], propiedad:boolean): any[] {
    if(users && users.length && propiedad ){
      return users.filter(user => propiedad == user.has_parking)

    }else{ return users}
}

}
