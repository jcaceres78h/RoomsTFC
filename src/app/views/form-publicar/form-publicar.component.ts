import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import { RoomService } from '../../servicios/room/room.service';
import { ValidacionesService } from '../../servicios/validaciones/validaciones.service';

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

  constructor(private rs: RoomService, private ls: LoginService,
              private validation: ValidacionesService, private router: Router) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) this.router.navigate(['iniciar-sesion'])
    this.room.userId = this.ls.userLogged;
  }


  publicar() {
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
    if (!this.validation.validateCalle(this.room.street)) {
      this.errorCalle = true;
      validation = false;
    }
    if (!this.validation.validateNumero(this.room.number)) {
      this.errorNumero = true;
      validation = false;
    }
    if (!this.validation.validateLocalidad(this.room.locality)) {
      this.errorLocalidad = true;
      validation = false;
    }
    if (!this.validation.validatePostCode(this.room.postcode)) {
      this.errorCP = true;
      validation = false;
    }
    if (!this.validation.validateProvincia(this.room.province)) {
      this.errorProv = true;
      validation = false;
    }
    if (!this.validation.validatePais(this.room.country)) {
      this.errorPais = true;
      validation = false;
    }
    if (!this.validation.validateDescription(this.room.room_description)) {
      this.errorDescripcion = true;
      validation = false;
    } else {
      this.errorDescripcion = false
    }
    if (!this.validation.validatePrecio(this.room.price)) {
      this.errorPrice = true;
      validation = false;
    }
    return validation;
  }


  // --- PARA LAS FOTOS ---
  urlFoto: string = ''
  seleccionarFoto = false
  errorImage = false
  file: File|null = null
  useImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      if (event.target.files[0].size >= 2097152) {
        this.errorImage = true;
        this.urlFoto = ''
        this.file = null
      } else {
        const reader = new FileReader();
        this.file = event.target.files[0]
        reader.readAsDataURL(event.target.files[0])
        reader.onloadend = ((e) => {
          // @ts-ignore
          this.urlFoto = e.target.result
          this.errorImage = false
          // console.log(this.file)
        })
      }
    }
  }
}
