import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomFiltrosService {

  constructor() { }
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
  private parking = false;
  private aireAcondicionado = false;
  private fumar = false;
  private mascota = false;
  private parejas = false;
  private priceMax = 0;
  private priceMin = 0;


  setPriceMin(price : number) {
    this.priceMin = price;
  }

  getPriceMin(){
    return this.priceMin;
  }
  setPriceMax(price : number) {
    this.priceMax = price;
  }

  getPriceMax(){
    return this.priceMax;
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
  setAireAcondicionado(bool : boolean) {
    this.aireAcondicionado = bool;
  }

  getAireAcondicionado(){
    return this.aireAcondicionado;
  }
  setFumar(bool : boolean) {
    this.fumar = bool;
  }

  getFumar(){
    return this.fumar;
  }
  setMascota(bool : boolean) {
    this.mascota = bool;
  }

  getMascota(){
    return this.mascota;
  }
  setParejas(bool : boolean) {
    this.parejas = bool;
  }

  getParejas(){
    return this.parejas;
  }

  reset(){
    this.priceMax= 0;
    this.priceMin= 0;
    this.numCompaneros = 0;
    this.genCompañeros = 10;
    this.tipoCama = 0;
    this.amueblada= false;
    this.banoPrivado = false;
    this.vistaPrivada = false;
    this.internet = false;
    this.ascensor = false;
    this.lavadora = false;
    this.secadora = false;
    this.lavavajillas = false;
    this.jardin = false;
    this.balcon = false;
    this.calefaccion = false;
    this.portero = false;
    this.accesible = false;
    this.parking = false;
    this.aireAcondicionado = false;
    this.fumar = false;
    this.mascota = false;
    this.parejas = false;
  }

}
