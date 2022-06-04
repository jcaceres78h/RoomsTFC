import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
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

}
