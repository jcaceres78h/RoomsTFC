import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../servicios/room/room.service';
import { LoginService } from '../../servicios/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-room',
  templateUrl: './editar-room.component.html',
  styleUrls: ['./editar-room.component.css']
})
export class EditarRoomComponent implements OnInit {

  private id: any
  private _room: any
  constructor(private rs: RoomService, private ls: LoginService,
              private ac: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) {
      this.router.navigate(['iniciar-sesion'])
    }
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')})
    this.rs.getUpdateRoomById(this.id)
      .then(e => {
        if (e.status == 404) {
          this.router.navigate(['/404'])
        } else {
          this._room = e
          if (!this.checkUser()) {
            this.router.navigate(['mis-publicaciones'])
          }
        }
      })

  }

  get room() {
    return this._room
  }


  errorCalle = false;
  errorNumero = false;
  errorLocalidad = false;
  errorCP = false;
  errorProv = false;
  errorPais = false;
  errorDescripcion = false;
  errorPrice = false;

  validar() {
    let validation = true;
    if (this.room.street === "") {
      this.errorCalle = true;
      validation = false;
    }
    if (this.room.number <= 0) {
      this.errorNumero = true;
      validation = false;
    }
    if (this.room.locality === "") {
      this.errorLocalidad = true;
      validation = false;
    }
    if (this.room.postcode < 10000 || this.room.postcode > 99999) {
      this.errorCP = true;
      validation = false;
    }
    if (this.room.province === "" ) {
      this.errorProv = true;
      validation = false;
    }
    if (this.room.country === "") {
      this.errorPais = true;
      validation = false;
    }
    if (this.room.room_description === "") {
      this.errorDescripcion = false;
      validation = false;
    }
    if (this.room.price <= 0) {
      this.errorPrice = true;
      validation = false;
    }
    return validation;
  }

  publicar() {
    console.log(this.room)
    if(this.validar()) {
      console.log("validado")
      this.rs.postNewRoom(this.room)
        .then(e => {
          if (e.estado == 400) {
            console.log(e.errores)
            this.router.navigate(['/error', 5])
          } else {
            this.router.navigate(['mis-publicaciones'])
          }
        })
    } else {
      console.log("No validado")
    }
  }



  //Botón volver
  volver() {
    //TODO función para volver atrás en la navegación
    window.history.back();
  }

  mostrarCardEliminar = true
  abrirEliminarCard(){
    this.mostrarCardEliminar = !this.mostrarCardEliminar
  }

  checkUser() {
    if (!this.ls.isLoggeado)
      return false;

    return this.room.userId == this.ls.userLogged;
  }
}
