import { Component, OnInit } from '@angular/core';

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

  constructor() {

  }

  ngOnInit(): void {

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
    if (this.num_roommates < 10)
      this.num_roommates++;
  }

  menos_roomMate() {
    if (this.num_roommates > 0)
      this.num_roommates--;
  }

  gender = 0;
  selectGender(gender: number) {
    this.gender = gender;
  }

  cama = 1;
  selectCama(tipo: number) {
    this.cama = tipo;
  }

  amueblada = false
  changeAmueblada() {
    this.amueblada = !this.amueblada;
  }

  banoPrivado = false
  changeBanoPrivado() {
    this.banoPrivado = !this.banoPrivado;
  }

  ventana = false
  changeVentana() {
    this.ventana = !this.ventana;
  }

  fumar = false
  changeFumar() {
    this.fumar = !this.fumar
  }

  mascotas = false
  changeMascotas() {
    this.mascotas = !this.mascotas
  }

  parejas = false
  changeParejas() {
    this.parejas = !this.parejas
  }

  wifi = false
  changeWifi() {
    this.wifi = !this.wifi
  }

  ascensor = false
  changeAscensor() {
    this.ascensor = !this.ascensor
  }

  lavadora = false
  changeLavadora() {
    this.lavadora = !this.lavadora
  }

  secadora = false
  changeSecadora() {
    this.secadora = !this.secadora
  }

  lavavajillas = false
  changeLavavajillas() {
    this.lavavajillas = !this.lavavajillas
  }

  jardin = false
  changeJardin() {
    this.jardin = !this.jardin
  }

  balcon = false
  changeBalcon() {
    this.balcon = !this.balcon
  }

  calefaccion = false
  changeCalefaccion() {
    this.calefaccion = !this.calefaccion
  }

  portero = false
  changePortero() {
    this.portero = !this.portero
  }

  accesible = false
  changeAccesible() {
    this.accesible = !this.accesible
  }

  parking = false
  changeParking() {
    this.parking = !this.parking
  }

  aireAcondicionado = false
  changeAireAcondicionado() {
    this.aireAcondicionado = !this.aireAcondicionado
  }

  presupuestoMinimo: number = 0
  presupeustoMaximo: number = 99999

  changeValorMinimo() {
    console.log("Nuevo valor mínimo")
    //Probando cambios
  }

  changeValorMaximo() {
    console.log("Nuevo valor máximo")
  }

}
