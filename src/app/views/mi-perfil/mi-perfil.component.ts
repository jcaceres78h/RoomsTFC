import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicios/user/user.service';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  constructor(private us: UserService, private ls: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) {
      this.router.navigate(['iniciar-sesion'])
    }
    this.us.getUserUpdateById(this.ls.userLogged)
    this.getFotos()
  }

  get usuario(){
    return this.us.getUserById()
  }

  get workingStuding() {
    let icon = {
      'clase': '',
      'texto': ''
    }

    if (this.usuario.working && this.usuario.studing) {
      icon.clase = 'iconoEstudioTrabajo'
      icon.texto = 'Estudio y trabajo'
    } else {
      if (this.usuario.studing) {
        icon.clase = 'iconoEstudio'
        icon.texto = 'Estudio'
      } else {
        icon.clase = 'iconoTrabajo'
        icon.texto = 'Trabajo'
      }
    }
    return icon;
  }

  get userCaracteristicas() {
    let lista = []

    lista.push(this.workingStuding)
    if (this.usuario.user_vegan) {
      lista.push({
        'clase': 'iconoVegano',
        'texto': 'Vegano'
      })}
    if (this.usuario.user_smoke) {
      lista.push({
        'clase': 'iconoFumador',
        'texto': 'Fumador'
      })}
    if (this.usuario.user_pet) {
      lista.push({
        'clase': 'iconoMascotas',
        'texto': 'Mascotas'
      })}

    return lista;
  }

  get mateGender() {
    let aux = ''

    switch (this.usuario.roommate_gender % 3) {
      case 0: aux = 'chicos'; break;
      case 1: aux = 'chicas'; break;
      case 2: aux = 'sin preferencias de genero'; break;
      default: aux = 'sin preferencias';
    }

    return aux;
  }

  get tipoCama() {
    let cama = {
      "clase": "",
      "texto": ""
    }
    switch (this.usuario.bed_type) {
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
    if (this.usuario.is_furnished) {
      lista.push({
        "clase": "iconoMuebles",
        "texto": "Amueblado"
      })
    }
    if (this.usuario.has_private_bath) {
      lista.push({
        "clase": "iconoBath",
        "texto": "Baño privado"
      })
    }
    if (this.usuario.has_private_view) {
      lista.push({
        "clase": "iconoVentana",
        "texto": "Vista exterior"
      })
    }

    return lista;
  }

  get opcionesPiso() {
    let lista = [];

    if (this.usuario.has_internet) {
      lista.push({
        "clase": "iconoWifi",
        "texto": "WiFi"
      })
    }
    if (this.usuario.has_elevator) {
      lista.push({
        "clase": "iconoAscensor",
        "texto": "Ascensor"
      })
    }
    if (this.usuario.has_whashing_machine) {
      lista.push({
        "clase": "iconoLavadora",
        "texto": "Lavadora"
      })
    }
    if (this.usuario.has_drying_machine) {
      lista.push({
        "clase": "iconoSecadora",
        "texto": "Secadora"
      })
    }
    if (this.usuario.has_dishwasher) {
      lista.push({
        "clase": "iconoLavavajillas",
        "texto": "Lavavajillas"
      })
    }
    if (this.usuario.has_garden) {
      lista.push({
        "clase": "iconoJardin",
        "texto": "Jardín"
      })
    }
    if (this.usuario.has_balcony) {
      lista.push({
        "clase": "iconoBalcon",
        "texto": "Balcón"
      })
    }
    if (this.usuario.has_heating) {
      lista.push({
        "clase": "iconoCalefaccion",
        "texto": "Calefacción"
      })
    }
    if (this.usuario.has_doorman) {
      lista.push({
        "clase": "iconoDoorman",
        "texto": "Portero"
      })
    }
    if (this.usuario.is_accessibility) {
      lista.push({
        "clase": "iconoAccesible",
        "texto": "Accesible"
      })
    }
    if (this.usuario.has_parking) {
      lista.push({
        "clase": "iconoParking",
        "texto": "Parking"
      })
    }
    if (this.usuario.has_air_conditioning) {
      lista.push({
        "clase": "iconoAireAcondicionado",
        "texto": "Aire acondicionado"
      })
    }

    return lista;
  }

  get normasConvivencia() {
    let lista = [];

    if (this.usuario.room_smoke) {
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
    if (this.usuario.room_pet) {
      lista.push({
        "clase": "iconoMascotas",
        "texto": "Mascotas"
      })
    }
    if (this.usuario.room_couples) {
      lista.push({
        "clase": "iconoCouples",
        "texto": "Parejas"
      })
    }

    return lista;
  }

  fotos: any
  foto_perfil = '';
  getFotos() {
    axios.get(`http://167.99.46.205/index.php/api/images?type=user&id=${this.ls.userLogged}`)
      .then(e => {
        this.fotos = e.data.data;
        this.foto_perfil = this.fotos[0].file_path
        // console.log(this.foto_perfil)
      })
  }

  volver() {
    //TODO función para volver atrás en la navegación
    window.history.back();
  }
}
