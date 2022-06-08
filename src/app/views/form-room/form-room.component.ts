import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-room',
  templateUrl: './form-room.component.html',
  styleUrls: ['./form-room.component.css']
})
export class FormRoomComponent implements OnInit {

  titulo = "Te ayudamos a encontrar a tu piso ideal"
  descripcion = "Si tienes claro cómo y donde quieres vivir"

  pasar = false;

  constructor() { }

  ngOnInit(): void {
  }

  room = {
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
    if (num === -1 && this.room.num_roommate > 0)
      this.room.num_roommate--;
    else if (num === +1 && this.room.num_roommate < 10)
      this.room.num_roommate++;
  }

  buscar() {
    console.log("Enviado")
  }

}
