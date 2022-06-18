import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import { UserFiltrosService } from 'src/app/servicios/user/user-filtros.service';
import { ValidacionesService } from '../../servicios/validaciones/validaciones.service';

@Component({
  selector: 'app-form-companero',
  templateUrl: './form-companero.component.html',
  styleUrls: ['./form-companero.component.css']
})
export class FormCompaneroComponent implements OnInit {

  titulo = "Te ayudamos a encontrar a tu compañero ideal"
  descripcion = "Si tienes claro cómo sería tu compañero de piso perfecto"

  pasar = false;

  constructor(private ls: LoginService, private validation: ValidacionesService,
              private router: Router, private userfiltro: UserFiltrosService) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) {
      this.router.navigate(['iniciar-sesion'])
    }
  }

  user = {
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
    if (num === -1 && this.user.num_roommate > 0)
      this.user.num_roommate--;
    else if (num === +1 && this.user.num_roommate < 10)
      this.user.num_roommate++;
  }

  errorLocality = false
  validate() {
    let validation = true
    if (!this.validation.validateLocalidad(this.user.locality)) {
      validation = false
      this.errorLocality = true
    }
    return validation;
  }

  aplicarFiltros() {
    this.userfiltro.setLocality(this.user.locality.toLowerCase())
    this.userfiltro.setnumCompaneros(this.user.num_roommate)
    this.userfiltro.setgenCompaneros(this.user.roommate_gender)
    this.userfiltro.setTipoCama(this.user.bed_type)
    this.userfiltro.setAmueblada(this.user.is_furnished)
    this.userfiltro.setbanoPrivado(this.user.has_private_bath)
    this.userfiltro.setVistaPrivada(this.user.has_private_view)
    this.userfiltro.setInternet(this.user.has_internet)
    this.userfiltro.setAscensor(this.user.has_elevator)
    this.userfiltro.setLavadora(this.user.has_whashing_machine)
    this.userfiltro.setSecadora(this.user.has_drying_machine)
    this.userfiltro.setLavavajillas(this.user.has_dishwasher)
    this.userfiltro.setJardin(this.user.has_garden)
    this.userfiltro.setBalcon(this.user.has_balcony)
    this.userfiltro.setCalefaccion(this.user.has_heating)
    this.userfiltro.setPortero(this.user.has_doorman)
    this.userfiltro.setAccesible(this.user.is_accessibility)
    this.userfiltro.setParking(this.user.has_parking)
    this.userfiltro.setAireAcondicionado(this.user.has_air_conditioning)
    this.userfiltro.setFumar(this.user.room_smoke)
    this.userfiltro.setMascota(this.user.room_pet)
    this.userfiltro.setParejas(this.user.room_couples)
  }

  setGender(gender: number) {
    console.log(gender)
    if (this.user.roommate_gender === gender) {
      console.log("Son iguales")
      this.user.roommate_gender = 10
    } else {
      console.log("No son iguales")
      this.user.roommate_gender = gender
    }
  }

  buscar() {
    if (this.validate()) {
      this.aplicarFiltros()
      this.router.navigate(['resultados-companeros'])
    }
    console.log("Enviado")
  }



}
