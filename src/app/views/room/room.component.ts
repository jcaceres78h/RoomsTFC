import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../servicios/room/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import axios from 'axios';
import { LoginService } from '../../servicios/login/login.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  aux: any;
  private id: any;
  //_room: any

  constructor(private ls: LoginService, private roomService: RoomService, private ac: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    //this._room = false
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')})
    /*this.roomService.getUpdateRoomById(this.id)
      .then(e => {
        if (e.status == 404) {
          this.router.navigate(['/404'])
        } else {
          console.log(e)
          this._room = e
          this.verMapa()
        }
      })*/
      this.roomService.getUpdateRoomById(this.id)
      console.log(this.roomService.getRoomById())
  }
 _room = true

  room(){
   // this._room = this.roomService.getRoomById();
    return this.roomService.getRoomById();
  }

  cargando(){
    if(this.roomService.getRoomById())
      return true
    return false
  }

  get islogeado() {
    return this.ls.userLogged
  }

  volver() {
    //TODO función para volver atrás en la navegación
    window.history.back();
  }

  count = 0


  get cama(): string {
    let cama: string;
    switch (this.room().bed_type) {
      case 1: cama = "individual"; break;
      case 2: cama = "doble"; break;
      case 0: cama = "con litera"; break;
      default: cama = "Sin datos";
    }
    return cama;
  }

  get tipoCama() {
    let cama = {
      "clase": "",
      "texto": ""
    }
    switch (this.room().bed_type) {
      case 1: {
        cama.clase = "iconoBed";
        cama.texto = "Individual"
      }
        break;
      case 2: {
        cama.clase = "iconoCamaDoble";
        cama.texto = "Cama doble"
      }
        break;
      case 0: {
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
    if (this.room().is_furnished) {
      lista.push({
        "clase": "iconoMuebles",
        "texto": "Amueblado"
      })
    }
    if (this.room().has_private_bath) {
      lista.push({
        "clase": "iconoBath",
        "texto": "Baño privado"
      })
    }
    if (this.room().has_private_view) {
      lista.push({
        "clase": "iconoVentana",
        "texto": "Vista exterior"
      })
    }

    return lista;
  }

  get opcionesPiso() {
    let lista = [];

    if (this.room().has_internet) {
      lista.push({
        "clase": "iconoWifi",
        "texto": "WiFi"
      })
    }
    if (this.room().has_elevator) {
      lista.push({
        "clase": "iconoAscensor",
        "texto": "Ascensor"
      })
    }
    if (this.room().has_whashing_machine) {
      lista.push({
        "clase": "iconoLavadora",
        "texto": "Lavadora"
      })
    }
    if (this.room().has_drying_machine) {
      lista.push({
        "clase": "iconoSecadora",
        "texto": "Secadora"
      })
    }
    if (this.room().has_dishwasher) {
      lista.push({
        "clase": "iconoLavavajillas",
        "texto": "Lavavajillas"
      })
    }
    if (this.room().has_garden) {
      lista.push({
        "clase": "iconoJardin",
        "texto": "Jardín"
      })
    }
    if (this.room().has_balcony) {
      lista.push({
        "clase": "iconoBalcon",
        "texto": "Balcón"
      })
    }
    if (this.room().has_heating) {
      lista.push({
        "clase": "iconoCalefaccion",
        "texto": "Calefacción"
      })
    }
    if (this.room().has_doorman) {
      lista.push({
        "clase": "iconoDoorman",
        "texto": "Portero"
      })
    }
    if (this.room().is_accessibility) {
      lista.push({
        "clase": "iconoAccesible",
        "texto": "Accesible"
      })
    }
    if (this.room().has_parking) {
      lista.push({
        "clase": "iconoParking",
        "texto": "Parking"
      })
    }
    if (this.room().has_air_conditioning) {
      lista.push({
        "clase": "iconoAireAcondicionado",
        "texto": "Aire acondicionado"
      })
    }

    return lista;
  }

  get normasConvivencia() {
    let lista = [];

    if (this.room().room_smoke) {
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
    if (this.room().room_pet) {
      lista.push({
        "clase": "iconoMascotas",
        "texto": "Mascotas"
      })
    }
    if (this.room().room_couples) {
      lista.push({
        "clase": "iconoCouples",
        "texto": "Parejas"
      })
    }

    return lista;
  }

  contactar() {
    if (this.islogeado) {
      this.router.navigate(['perfil', this._room.userId])
    }
  }


  //A partir de aquí va la funcionalidad de los mapas
  lat = 37.991386
  lng = -1.1246448

  center = {
    lat: this.lat,
    lng: this.lng
  }

  zoom = 16
  mapOptions = {
    mapTypeId: 'hybrid',
    minZoom: 14
  }

  markerOptions = {
    animation: google.maps.Animation.DROP
  }

  markerLabel = {
    text: 'Aquí',
    fontWeight: 'bold',
    fontFamily: 'Raleway',
    className: 'markerLabel'
  }

  markerTitle = 'Aquí'

  dirToString(): string {
    let dir = ""
    dir += ",+" + this.room().number
    dir += ",+" + this.room().locality.replace(/ +/g, '+')
    dir += ",+" + this.room().postcode
    dir += ",+" + this.room().province.replace(/ +/g, '+')
    dir += ",+" + this.room().country.replace(/ +/g, '+')
    return dir
  }

  verMapa() {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCaqj3oLA89jfftw8Ll1NKvYKNZT2KEuyo&address=' + this.dirToString())
      .then(response => {
        this.lat = response.data.results[0].geometry.location.lat
        this.lng = response.data.results[0].geometry.location.lng
        this.center = {
          lat: this.lat,
          lng: this.lng
        }
        console.log(this.center)
      })
  }

}
