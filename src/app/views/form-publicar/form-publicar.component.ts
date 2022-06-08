import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-publicar',
  templateUrl: './form-publicar.component.html',
  styleUrls: ['./form-publicar.component.css']
})
export class FormPublicarComponent implements OnInit {

  titulo = "Publica esa habitación libre que tienes en casa"
  descripcion = "Estás a punto de darle vida a esa habitación y vivir" +
    "nuevas experiencias"

  pasar = false;

  constructor() { }

  ngOnInit(): void {
  }


  publicar() {
  }

  room = {
    id: 0,
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
}
