import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar-cuenta',
  templateUrl: './eliminar-cuenta.component.html',
  styleUrls: ['./eliminar-cuenta.component.css']
})
export class EliminarCuentaComponent implements OnInit {

  @Input() mostrarCardEliminar = false

  constructor() { }

  ngOnInit(): void {
  }

  cerrarPopUp(){
    this.mostrarCardEliminar = !this.mostrarCardEliminar
    console.log(this.mostrarCardEliminar)
  }

}
