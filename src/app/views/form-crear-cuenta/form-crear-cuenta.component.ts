import { Component, OnInit } from '@angular/core';
import {UserService} from "../../servicios/user/user.service";
import {Router} from "@angular/router"
import { LoginService } from '../../servicios/login/login.service';
import { ValidacionesService } from '../../servicios/validaciones/validaciones.service';
import { RegistroService } from '../../servicios/registro/registro.service';

@Component({
  selector: 'app-form-crear-cuenta',
  templateUrl: './form-crear-cuenta.component.html',
  styleUrls: ['./form-crear-cuenta.component.css']
})
export class FormCrearCuentaComponent implements OnInit {

  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    about_me: '',
    user_smoke: false,
    user_pet: false,
    user_vegan: false,
    studing: false,
    working: false,
    gender: 0,
    age: 0,
    locality: '',
    num_roommate: 0,
    roommate_gender: 0,
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


  step = 1;

  constructor(private userService: UserService, private ls: LoginService, private register: RegistroService,
              private validation: ValidacionesService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.ls.isLoggeado)
      this.router.navigate([''])
    else {
      this.user.name = this.register.data.name;
      this.user.password = this.register.data.password;
      this.user.email = this.register.data.email;
    }
  }

  stepDiscount() {
    if (this.step > 1)
      this.step--;
  }

  errorNombre = false
  errorEmail = false
  errorPhone = false
  errorEdad = false
  errorDescripcion = false
  errorLocality = false

  validate(): boolean {
    let validation = true;
    if (!this.validation.validateUser(this.user.name)) {
      validation = false;
      this.errorNombre = true;
    }
    if (!this.validation.validateEmail(this.user.email)) {
      validation = false;
      this.errorEmail = true;
    }
    if (!this.validation.validatePhone(this.user.phone)) {
      validation = false;
      this.errorPhone = true;
    }
    if (!this.validation.validateEdad(this.user.age)) {
      validation = false;
      this.errorEdad = true;
    }
    if (!this.validation.validateAboutMe(this.user.about_me)) {
      validation = false;
      this.errorDescripcion = true;
    }
    if (!this.validation.validateLocalidadUser(this.user.locality)) {
      validation = false;
      this.errorLocality = true;
    }
    return validation;
  }


  async stepAdd() {
    if (this.step >= 2) {
      if (!this.validate()) this.step = 0
      else {
        this.user.locality = this.user.locality.toLowerCase();
        this.userService.postNewUser(this.user)
          .then(e => {
            if (e.estado == 400) {
              console.log(e.errores)
              this.router.navigate(['/error', 5])
            } else {
              this.register.resetData();
              this.ls.login(this.user);
            }
          })
      }
    }
    this.step++;
    // console.log(this.user)
  }

  setStep(step: number) {
    if (this.step !== 3)
      this.step = step
  }

  estudioTrabajo(): boolean {
    return this.user.studing && this.user.working;
  }

  addRoomMate(num: number) {
    if (num === -1 && this.user.num_roommate > 0)
      this.user.num_roommate--;
    else if (num === +1 && this.user.num_roommate < 10)
      this.user.num_roommate++;
  }

}
