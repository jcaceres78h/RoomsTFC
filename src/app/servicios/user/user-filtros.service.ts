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
  private genCompañeros = 10;
  private tipoCama = 0;
  private amueblada= false;
  private banoPrivado = false;
  private vistaPrivada = true;




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
  setgenCompaneros(num : number) {
    this.genCompañeros = num;
  }

  getgenCompaneros(){
    return this.genCompañeros;
  }
  setTipoCama(num : number) {
    this.tipoCama = num;
  }

  getTipoCama(){
    return this.tipoCama;
  }
  setAmueblada(bool : boolean) {
    this.amueblada = bool;
  }

  getAmueblada(){
    return this.amueblada;
  }
  setbanoPrivado(bool : boolean) {
    this.banoPrivado = bool;
  }

  getbanoPrivado(){
    return this.banoPrivado;
  }
  setVistaPrivada(bool : boolean) {
    this.vistaPrivada = bool;
  }

  getVistaPrivada(){
    return this.vistaPrivada;
  }


}
