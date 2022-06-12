import { Component, OnInit } from '@angular/core';
import { RoomFiltrosService } from 'src/app/servicios/room/room-filtros.service';

@Component({
  selector: 'app-categorias-filtros',
  templateUrl: './categorias-filtros.component.html',
  styleUrls: ['./categorias-filtros.component.css']
})
export class CategoriasFiltrosComponent implements OnInit {

  //mostrarCard = true
  //control = 0

  public card1 = false
  public card2 = false
  public card3 = false
  public card4 = false

  constructor(private roomFiltros: RoomFiltrosService) {

  }

  ngOnInit() : void {

  }

  //Función cuando estaba usando otro componente
 /*  mostrarCardFiltros(num:number){
    this.control = num
    this.mostrarCard = true;
    console.log(this.control)
  } */

  mostrarCard1(){
    this.card1 = !this.card1
    this.card2 = false
    this.card3 = false
    this.card4 = false
  }
  mostrarCard2(){
    this.card2 = !this.card2
    this.card1 = false
    this.card3 = false
    this.card4 = false
  }
  mostrarCard3(){
    this.card3 = !this.card3
    this.card1 = false
    this.card2 = false
    this.card4 = false
  }
  mostrarCard4(){
    this.card4 = !this.card4
    this.card2 = false
    this.card3 = false
    this.card1 = false
  }

  num_roommates = 0;

  mas_roomMate() {
    if (this.num_roommates < 99){
      this.num_roommates++;
      this.roomFiltros.setnumCompaneros(this.num_roommates)
    }

  }

  menos_roomMate() {
    if (this.num_roommates > 0){
      this.num_roommates--;
      this.roomFiltros.setnumCompaneros(this.num_roommates);
    }
  }

  gender = 2;
  selectGender(gender: number) {
    this.gender = gender;
    this.roomFiltros.setgenCompaneros(gender);
  }

  cama = 0;
  selectCama(tipo: number) {
    if(this.cama == tipo){
      this.cama =0;
      this.roomFiltros.setTipoCama(0)
    }

    else{
      this.cama = tipo;
      this.roomFiltros.setTipoCama(this.cama)
    }
  }

  amueblada = false
  changeAmueblada() {
    this.amueblada = !this.amueblada;
    this.roomFiltros.setAmueblada(this.amueblada);
  }

  banoPrivado = false
  changeBanoPrivado() {
    this.banoPrivado = !this.banoPrivado;
    this.roomFiltros.setbanoPrivado(this.banoPrivado);

  }

  ventana = false
  changeVentana() {
    this.ventana = !this.ventana;
    this.roomFiltros.setVistaPrivada(this.ventana);
  }

  fumar = false
  changeFumar() {
    this.fumar = !this.fumar
    this.roomFiltros.setFumar(this.fumar);
  }

  mascotas = false
  changeMascotas() {
    this.mascotas = !this.mascotas
    this.roomFiltros.setMascota(this.mascotas);
  }

  parejas = false
  changeParejas() {
    this.parejas = !this.parejas
    this.roomFiltros.setParejas(this.parejas);
  }

  wifi = false
  changeWifi() {
    this.wifi = !this.wifi
    this.roomFiltros.setInternet(this.wifi);
  }

  ascensor = false
  changeAscensor() {
    this.ascensor = !this.ascensor
    this.roomFiltros.setAscensor(this.ascensor);
  }

  lavadora = false
  changeLavadora() {
    this.lavadora = !this.lavadora
    this.roomFiltros.setLavadora(this.lavadora);
  }

  secadora = false
  changeSecadora() {
    this.secadora = !this.secadora
    this.roomFiltros.setSecadora(this.secadora);
  }

  lavavajillas = false
  changeLavavajillas() {
    this.lavavajillas = !this.lavavajillas
    this.roomFiltros.setLavavajillas(this.lavavajillas);
  }

  jardin = false
  changeJardin() {
    this.jardin = !this.jardin
    this.roomFiltros.setJardin(this.jardin)
  }

  balcon = false
  changeBalcon() {
    this.balcon = !this.balcon
    this.roomFiltros.setBalcon(this.balcon);
  }

  calefaccion = false
  changeCalefaccion() {
    this.calefaccion = !this.calefaccion
    this.roomFiltros.setCalefaccion(this.calefaccion);
  }

  portero = false
  changePortero() {
    this.portero = !this.portero
    this.roomFiltros.setPortero(this.portero);
  }

  accesible = false
  changeAccesible() {
    this.accesible = !this.accesible
    this.roomFiltros.setAccesible(this.accesible);
  }

  parking = false
  changeParking() {
    this.parking = !this.parking
    this.roomFiltros.setParking(this.parking);
  }

  aireAcondicionado = false
  changeAireAcondicionado() {
    this.aireAcondicionado = !this.aireAcondicionado
    this.roomFiltros.setAireAcondicionado(this.aireAcondicionado);
  }

  presupuestoMinimo: number = 0
  presupeustoMaximo: number = 0

  changeValorMinimo(minimo : string) {
    if(minimo == ""){
      this.presupuestoMinimo = 0;
      this.roomFiltros.setPriceMin(0)
    }else{
      this.presupuestoMinimo = parseInt(minimo);
      this.roomFiltros.setPriceMin(this.presupuestoMinimo)
    }
  }

  changeValorMaximo(maximo : string) {
    if(maximo == ""){
      this.presupeustoMaximo = 0;
      this.roomFiltros.setPriceMax(0)
    }else{
    this.presupeustoMaximo = parseInt(maximo);
    this.roomFiltros.setPriceMax(this.presupeustoMaximo)
    }
  }
}
