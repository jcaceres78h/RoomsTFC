import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-filtros',
  templateUrl: './categorias-filtros.component.html',
  styleUrls: ['./categorias-filtros.component.css']
})
export class CategoriasFiltrosComponent implements OnInit {

  //mostrarCard = true
  //control = 0

  contenedor = document.querySelector('.wrapper')
  categorias = document.querySelectorAll('.categoria_filtros')
  tarjetas = document.querySelectorAll('.container_card_filtros')
  id = 0

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

  capturarClick(id:number){
  
      this.categorias.forEach(categoria=>{
        categoria.addEventListener('click', function(){
          //this.id= categoria.dataset.id
          //this.id = id
          console.log(categoria)

        })

      })
  


  }





}
