import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-filtros',
  templateUrl: './categorias-filtros.component.html',
  styleUrls: ['./categorias-filtros.component.css']
})
export class CategoriasFiltrosComponent implements OnInit {

  mostrarCard = true
  control = 0

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCardFiltros(num:number){
    this.control = num
    this.mostrarCard = true;
    console.log(this.control)
  }

}
