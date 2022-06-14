import { Component, Input, OnInit } from '@angular/core';
import { RoomService } from '../../servicios/room/room.service';
import { LoginService } from '../../servicios/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-room',
  templateUrl: './eliminar-room.component.html',
  styleUrls: ['./eliminar-room.component.css']
})
export class EliminarRoomComponent implements OnInit {

  private id: any;

  constructor(private rs: RoomService, private ls: LoginService,
              private router: Router, private ac: ActivatedRoute) { }

  @Input() mostrarCardEliminar = false

  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')})
  }

  cerrarPopUp() {
    this.mostrarCardEliminar = !this.mostrarCardEliminar
  }


  eliminarRoom() {
    this.rs.deleteRoom(this.id)
    this.router.navigate(['mis-publicaciones'])
  }
}
