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
  }
  mostrarCard2(){
    this.card2 = !this.card2
  }
  mostrarCard3(){
    this.card3 = !this.card3
  }
  mostrarCard4(){
    this.card4 = !this.card4
  }





}
