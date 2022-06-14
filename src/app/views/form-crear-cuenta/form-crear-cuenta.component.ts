import { Component, OnInit } from '@angular/core';
import {UserService} from "../../servicios/user/user.service";
import {Router} from "@angular/router"
import { LoginService } from '../../servicios/login/login.service';

@Component({
  selector: 'app-form-crear-cuenta',
  templateUrl: './form-crear-cuenta.component.html',
  styleUrls: ['./form-crear-cuenta.component.css']
})
export class FormCrearCuentaComponent implements OnInit {

  user = {
    "name": '',
    "email": '',
    "phone": '',
    "password": '',
    "about_me": '',
    "user_smoke": false,
    "user_pet": false,
    "user_vegan": false,
    "studing": false,
    "working": false,
    "gender": 0,
    "age": 0,
    "locality": '',
    "num_roommate": 0,
    "roommate_gender": 0,
    "bed_type": 0,
    "is_furnished": false,
    "has_private_bath": false,
    "has_private_view": false,
    "has_internet": false,
    "has_elevator": false,
    "has_whashing_machine": false,
    "has_drying_machine": false,
    "has_dishwasher": false,
    "has_garden": false,
    "has_balcony": false,
    "has_heating": false,
    "has_doorman": false,
    "is_accessibility": false,
    "has_parking": false,
    "has_air_conditioning": false,
    "room_smoke": false,
    "room_pet": false,
    "room_couples": false
  }


  step = 1;

  constructor(private userService: UserService, private ls: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.ls.isLoggeado)
      this.router.navigate([''])
  }

  stepDiscount() {
    if (this.step > 1)
      this.step--;
  }

  async stepAdd() {
    if (this.step >= 2) {
      this.userService.postNewUser(this.user)
        .then(e => {
          if (e.estado == 400) {
            console.log(e.errores)
            this.router.navigate(['/error', 5])
          }
        })
    }
    this.step++;
    // console.log(this.user)
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
