import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import { RoomService } from '../../servicios/room/room.service';

@Component({
  selector: 'app-form-publicar',
  templateUrl: './form-publicar.component.html',
  styleUrls: ['./form-publicar.component.css']
})
export class FormPublicarComponent implements OnInit {

  titulo = "Publica esa habitación libre que tienes en casa"
  descripcion = "Estás a punto de darle vida a esa habitación y vivir nuevas experiencias"

  pasar = false;

  errorCalle = false;
  errorNumero = false;
  errorLocalidad = false;
  errorCP = false;
  errorProv = false;
  errorPais = false;
  errorDescripcion = false;
  errorPrice = false;

  constructor(private rs: RoomService, private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) this.router.navigate(['iniciar-sesion'])
    this.room.userId = this.ls.userLogged;
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

  room = {
    street: '',
    number: 0,
    floor_letter: '',
    locality: '',
    postcode: 0,
    province: '',
    country: '',
    roommate_gender: 0,
    bed_type: 0,
    is_furnished: false,
    has_private_bath: false,
    has_private_view: false,
    room_description: '',
    has_internet: false,
    has_elevator: false,
    has_whashing_machine: false,
    has_drying_machine: false,
    has_dishwasher: false,
    has_garden: false,
    has_balcony: false,
    has_heating: false,
    has_doorman: false,
    is_accessibility: false,
    has_parking: false,
    has_air_conditioning: false,
    room_smoke: false,
    room_pet: false,
    room_couples: false,
    price: 0,
    userId: 0,
    // user: null
  }

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

}
