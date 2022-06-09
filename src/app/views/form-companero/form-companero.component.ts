import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import { UserFiltrosService } from 'src/app/servicios/user/user-filtros.service';

@Component({
  selector: 'app-form-companero',
  templateUrl: './form-companero.component.html',
  styleUrls: ['./form-companero.component.css']
})
export class FormCompaneroComponent implements OnInit {

  titulo = "Te ayudamos a encontrar a tu compñaero ideal"
  descripcion = "Si tienes claro cómo sería tu compañero de piso perfecto"

  pasar = false;

  constructor(private ls: LoginService, private router: Router, private userfiltro: UserFiltrosService) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) {
      this.router.navigate(['iniciar-sesion'])
    }
  }

  user = {
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

  addRoomMate(num: number) {
    if (num === -1 && this.user.num_roommate > 0)
      this.user.num_roommate--;
    else if (num === +1 && this.user.num_roommate < 10)
      this.user.num_roommate++;
  }

  buscar() {
    console.log("Enviado")
  }

}
