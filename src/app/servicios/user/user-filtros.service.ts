import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFiltrosService {

  constructor() {
    this.locality = "";
  }

  private locality: string;
  private numCompaneros = 0;



  setLocality(localidad : string) {
    this.locality = localidad;
  }

  getlocality(){
    return this.locality;
  }

  setnumCompaneros(num : number) {
    this.numCompaneros = num;
  }

  getnumCompaneros(){
    return this.numCompaneros;
  }

}
