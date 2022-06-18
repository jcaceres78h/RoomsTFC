import { Component, OnInit } from '@angular/core';
import { ValidacionesService } from '../../servicios/validaciones/validaciones.service';
import { Router } from '@angular/router';
import { RoomFiltrosService } from '../../servicios/room/room-filtros.service';

@Component({
  selector: 'app-form-room',
  templateUrl: './form-room.component.html',
  styleUrls: ['./form-room.component.css']
})
export class FormRoomComponent implements OnInit {

  titulo = "Te ayudamos a encontrar a tu piso ideal"
  descripcion = "Si tienes claro cómo y donde quieres vivir"

  pasar = false;

  constructor(private validation: ValidacionesService, private router: Router,
              private roomFiltro: RoomFiltrosService) { }

  ngOnInit(): void {
  }

  room = {
    locality: '',
    num_roommate: 0,
    roommate_gender: 10,
    bed_type: 0,
    is_furnished: false,
    has_private_bath: false,
    has_private_view: false,
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
    room_couples: false
  }

  addRoomMate(num: number) {
    if (num === -1 && this.room.num_roommate > 0)
      this.room.num_roommate--;
    else if (num === +1 && this.room.num_roommate < 10)
      this.room.num_roommate++;
  }

  errorLocality = false
  validate() {
    let validation = true
    if (!this.validation.validateLocalidad(this.room.locality)) {
      validation = false
      this.errorLocality = true
    }
    return validation;
  }

  aplicarFiltros() {
    this.roomFiltro.setnumCompaneros(this.room.num_roommate)
    this.roomFiltro.setgenCompaneros(this.room.roommate_gender)
    this.roomFiltro.setTipoCama(this.room.bed_type)
    this.roomFiltro.setAmueblada(this.room.is_furnished)
    this.roomFiltro.setbanoPrivado(this.room.has_private_bath)
    this.roomFiltro.setVistaPrivada(this.room.has_private_view)
    this.roomFiltro.setInternet(this.room.has_internet)
    this.roomFiltro.setAscensor(this.room.has_elevator)
    this.roomFiltro.setLavadora(this.room.has_whashing_machine)
    this.roomFiltro.setSecadora(this.room.has_drying_machine)
    this.roomFiltro.setLavavajillas(this.room.has_dishwasher)
    this.roomFiltro.setJardin(this.room.has_garden)
    console.log(this.roomFiltro.getJardin())
    console.log(this.room.has_garden)
    this.roomFiltro.setBalcon(this.room.has_balcony)
    this.roomFiltro.setCalefaccion(this.room.has_heating)
    this.roomFiltro.setPortero(this.room.has_doorman)
    this.roomFiltro.setAccesible(this.room.is_accessibility)
    this.roomFiltro.setParking(this.room.has_parking)
    this.roomFiltro.setAireAcondicionado(this.room.has_air_conditioning)
    this.roomFiltro.setFumar(this.room.room_smoke)
    this.roomFiltro.setMascota(this.room.room_pet)
    this.roomFiltro.setParejas(this.room.room_couples)
  }

  setGender(gender: number) {
    if (this.room.roommate_gender === gender) {
      this.room.roommate_gender = 10
    } else {
      this.room.roommate_gender = gender
    }
  }

  buscar() {
    if (this.validate()) {
      this.aplicarFiltros()
      this.router.navigate(['resultados-room', this.room.locality])
    }
  }

}
