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
  private vistaPrivada = false;
  private internet = false;
  private ascensor = false;
  private lavadora = false;
  private secadora = false;
  private lavavajillas = false;
  private jardin = false;
  private balcon = false;
  private calefaccion = false;
  private portero = false;
  private accesible = false;
  private parking = true;


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
  setInternet(bool : boolean) {
    this.internet = bool;
  }

  getInternet(){
    return this.internet;
  }
  setAscensor(bool : boolean) {
    this.ascensor = bool;
  }

  getAscensor(){
    return this.ascensor;
  }
  setLavadora(bool : boolean) {
    this.lavadora = bool;
  }

  getLavadora(){
    return this.lavadora;
  }
  setSecadora(bool : boolean) {
    this.secadora = bool;
  }

  getSecadora(){
    return this.secadora;
  }
  setLavavajillas(bool : boolean) {
    this.lavavajillas = bool;
  }

  getLavavajillas(){
    return this.lavavajillas;
  }
  setJardin(bool : boolean) {
    this.jardin = bool;
  }

  getJardin(){
    return this.jardin;
  }
  setBalcon(bool : boolean) {
    this.balcon = bool;
  }

  getBalcon(){
    return this.balcon;
  }
  setCalefaccion(bool : boolean) {
    this.calefaccion = bool;
  }

  getCalefaccion(){
    return this.calefaccion;
  }
  setPortero(bool : boolean) {
    this.portero = bool;
  }

  getPortero(){
    return this.portero;
  }
  setAccesible(bool : boolean) {
    this.accesible = bool;
  }

  getAccesible(){
    return this.accesible;
  }
  setParking(bool : boolean) {
    this.parking = bool;
  }

  getParking(){
    return this.parking;
  }


}
