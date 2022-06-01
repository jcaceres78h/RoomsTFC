import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil-usuario',
  templateUrl: './editar-perfil-usuario.component.html',
  styleUrls: ['./editar-perfil-usuario.component.css']
})
export class EditarPerfilUsuarioComponent implements OnInit {

  mostrarCardEliminar = true

  constructor() { }

  ngOnInit(): void {
  }

  abrirEliminarCard(){
    this.mostrarCardEliminar = !this.mostrarCardEliminar
  }
}
