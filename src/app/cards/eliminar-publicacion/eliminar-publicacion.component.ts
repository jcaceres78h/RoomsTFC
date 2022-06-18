import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-publicacion',
  templateUrl: './eliminar-publicacion.component.html',
  styleUrls: ['./eliminar-publicacion.component.css']
})
export class EliminarPublicacionComponent implements OnInit {

  @Input() mostrarCardEliminar = false

  constructor() { }

  ngOnInit(): void {
  }

  cerrarPopUp(){
    this.mostrarCardEliminar = !this.mostrarCardEliminar
    console.log(this.mostrarCardEliminar)
  }

}
