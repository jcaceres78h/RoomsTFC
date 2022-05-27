import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-filtros',
  templateUrl: './categorias-filtros.component.html',
  styleUrls: ['./categorias-filtros.component.css']
})
export class CategoriasFiltrosComponent implements OnInit {

  mostrarCard = true

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCardFiltros(){
    this.mostrarCard = !this.mostrarCard
  }

}
