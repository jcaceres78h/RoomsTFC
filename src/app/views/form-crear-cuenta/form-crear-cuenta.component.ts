import { Component, OnInit } from '@angular/core';
import {UserService} from "../../servicios/user/user.service";

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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  stepDiscount() {
    if (this.step > 1)
      this.step--;
  }

  stepAdd() {
    if (this.step >= 2)
      console.log(this.userService.postNewUser(this.user))
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
