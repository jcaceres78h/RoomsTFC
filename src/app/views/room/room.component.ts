import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../servicios/room/room.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  aux: any;
  private id: any;

  constructor(private roomService: RoomService, private ac: ActivatedRoute,
              private router: Router) {
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')})
    this.roomService.getUpdateRoomById(this.id)
  }

  ngOnInit(): void {
  }

  get room() {
    // return this.roomService.getRoomById(8)
    // return this.aux;
    if (!this.roomService.getRoomById()) {
      // this.router.navigate(['/'])

    }
    return this.roomService.getRoomById();
  }

  get cama(): string {
    let cama = "";
    switch (this.room.bed_type) {
      case 0: cama = "individual"; break;
      case 1: cama = "doble"; break;
      case 2: cama = "con litera"; break;
      default: cama = "Sin datos";
    }
    return cama;
  }

  get tipoCama() {
    let cama = {
      "clase": "",
      "texto": ""
    }
    switch (this.room.bed_type) {
      case 0: {
        cama.clase = "iconoBed";
        cama.texto = "Individual"
      }
        break;
      case 1: {
        cama.clase = "iconoCamaDoble";
        cama.texto = "Cama doble"
      }
        break;
      case 2: {
        cama.clase = "iconoLitera";
        cama.texto = "Litera"
      }
        break;
      default: {
        cama.clase = "";
        cama.texto = "Sin datos"
      }
    }
    return cama;
  }

  get opcionesRoom() {
    let lista = [];

    lista.push(this.tipoCama);
    if (this.room.is_furnished) {
      lista.push({
        "clase": "iconoMuebles",
        "texto": "Amueblado"
      })
    }
    if (this.room.has_private_bath) {
      lista.push({
        "clase": "iconoBath",
        "texto": "Baño privado"
      })
    }
    if (this.room.has_private_view) {
      lista.push({
        "clase": "iconoVentana",
        "texto": "Vista exterior"
      })
    }

    return lista;
  }

  get opcionesPiso() {
    let lista = [];

    if (this.room.has_internet) {
      lista.push({
        "clase": "iconoWifi",
        "texto": "WiFi"
      })
    }
    if (this.room.has_elevator) {
      lista.push({
        "clase": "iconoAscensor",
        "texto": "Ascensor"
      })
    }
    if (this.room.has_whashing_machine) {
      lista.push({
        "clase": "iconoLavadora",
        "texto": "Lavadora"
      })
    }
    if (this.room.has_drying_machine) {
      lista.push({
        "clase": "iconoSecadora",
        "texto": "Secadora"
      })
    }
    if (this.room.has_dishwasher) {
      lista.push({
        "clase": "iconoLavavajillas",
        "texto": "Lavavajillas"
      })
    }
    if (this.room.has_garden) {
      lista.push({
        "clase": "iconoJardin",
        "texto": "Jardín"
      })
    }
    if (this.room.has_balcony) {
      lista.push({
        "clase": "iconoBalcon",
        "texto": "Balcón"
      })
    }
    if (this.room.has_heating) {
      lista.push({
        "clase": "iconoCalefaccion",
        "texto": "Calefacción"
      })
    }
    if (this.room.has_doorman) {
      lista.push({
        "clase": "iconoDoorman",
        "texto": "Portero"
      })
    }
    if (this.room.is_accessibility) {
      lista.push({
        "clase": "iconoAccesible",
        "texto": "Accesible"
      })
    }
    if (this.room.has_parking) {
      lista.push({
        "clase": "iconoParking",
        "texto": "Parking"
      })
    }
    if (this.room.has_air_conditioning) {
      lista.push({
        "clase": "iconoAireAcondicionado",
        "texto": "Aire acondicionado"
      })
    }

    return lista;
  }

  get normasConvivencia() {
    let lista = [];

    if (this.room.room_smoke) {
      lista.push({
        "clase": "iconoFumador",
        "texto": "Fumar"
      })
    } else {
      lista.push({
        "clase": "iconoNoFumador",
        "texto": "No fumar"
      })
    }
    if (this.room.room_pet) {
      lista.push({
        "clase": "iconoMascotas",
        "texto": "Mascotas"
      })
    }
    if (this.room.room_couples) {
      lista.push({
        "clase": "iconoCouples",
        "texto": "Parejas"
      })
    }

    return lista;
  }

  contactar() {
    alert("Nombre" + "\n" + "email" + "\n" + "Teléfono")
  }
}
