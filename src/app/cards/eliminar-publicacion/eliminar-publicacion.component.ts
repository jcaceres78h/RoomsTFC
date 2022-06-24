import { Component, Input, OnInit } from '@angular/core';
import { RoomService } from '../../servicios/room/room.service';
import { LoginService } from '../../servicios/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-publicacion',
  templateUrl: './eliminar-publicacion.component.html',
  styleUrls: ['./eliminar-publicacion.component.css']
})
export class EliminarPublicacionComponent implements OnInit {
  private id: any;
  @Input() mostrarCardEliminar = false

  constructor(private rs: RoomService, private ls: LoginService,
              private router: Router, private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')})
  }

  cerrarPopUp(){
    this.mostrarCardEliminar = !this.mostrarCardEliminar
  }

  eliminarRoom() {
    this.rs.deleteRoom(this.id)
    this.router.navigate(['mis-publicaciones'])
  }
}
