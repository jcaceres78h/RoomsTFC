import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genCompaneros'
})
export class GenCompanerosPipe implements PipeTransform {

  transform(users: any[], propiedad:number): any[] {
    if(users && users.length && propiedad !=10){
      return users.filter(user => propiedad <= user.has_private_view)

    }else{ return users}

}

}
