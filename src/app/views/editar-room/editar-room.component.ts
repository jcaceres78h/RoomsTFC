import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../servicios/room/room.service';
import { LoginService } from '../../servicios/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidacionesService } from '../../servicios/validaciones/validaciones.service';
import { ImageService } from '../../servicios/imagen/image.service';

@Component({
  selector: 'app-editar-room',
  templateUrl: './editar-room.component.html',
  styleUrls: ['./editar-room.component.css']
})
export class EditarRoomComponent implements OnInit {

  private id: any
  private _room: any
  constructor(private rs: RoomService, private ls: LoginService, private validation: ValidacionesService,
              private imageService: ImageService, private ac: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) {
      this.router.navigate(['iniciar-sesion'])
    }
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')})
    this.rs.getUpdateRoomById(this.id)
      .then(e => {
        if (e.status == 404) {
          this.router.navigate(['/404'])
        } else {
          this._room = e
          if (!this.checkUser()) {
            this.router.navigate(['mis-publicaciones'])
          }
        }
      })

  }

  get room() {
    return this._room
  }


  errorCalle = false;
  errorNumero = false;
  errorLocalidad = false;
  errorCP = false;
  errorProv = false;
  errorPais = false;
  errorDescripcion = false;
  errorPrice = false;

  validar() {
    let validation = true;
    if (!this.validation.validateCalle(this.room.street)) {
      this.errorCalle = true;
      validation = false;
    }
    if (!this.validation.validateNumero(this.room.number)) {
      this.errorNumero = true;
      validation = false;
    }
    if (!this.validation.validateLocalidad(this.room.locality)) {
      this.errorLocalidad = true;
      validation = false;
    }
    if (!this.validation.validatePostCode(this.room.postcode)) {
      this.errorCP = true;
      validation = false;
    }
    if (!this.validation.validateProvincia(this.room.province)) {
      this.errorProv = true;
      validation = false;
    }
    if (!this.validation.validatePais(this.room.country)) {
      this.errorPais = true;
      validation = false;
    }
    if (!this.validation.validateDescription(this.room.room_description)) {
      this.errorDescripcion = true;
      validation = false;
    } else {
      this.errorDescripcion = false
    }
    if (!this.validation.validatePrecio(this.room.price)) {
      this.errorPrice = true;
      validation = false;
    }
    return validation;
  }

  msg = "";

  editar() {
    if (this.validar()) {
      this.rs.editarRoom(this.room)
        .then(e => {
            if (e.status == 200) {
              this.msg = "Cambios aplicados correctamente"
              this.router.navigate(['room', this.room.id])
            } else {
              this.msg = ""
            }
        })
    }
  }

  //Botón volver
  volver() {
    //TODO función para volver atrás en la navegación
    window.history.back();
  }

  mostrarCardEliminar = true
  abrirEliminarCard(){
    this.mostrarCardEliminar = !this.mostrarCardEliminar
  }

  checkUser() {
    if (!this.ls.isLoggeado)
      return false;

    return this.room.userId == this.ls.userLogged;
  }

  // --- PARA LAS FOTOS ---
  urlFoto: string = ""
  seleccionarFoto = false
  useImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onloadend = ((e) => {
        // @ts-ignore
        this.urlFoto = e.target.result
      })
    }
  }

  errorImage = false
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    this.imageService.uploadImage(file, 'room', this.room.id)
      .then(e => {
        // console.log(e.data)
        this.errorImage = false
      })
      .catch(e => {
        this.errorImage = true
        this.urlFoto = ''
      })
  }
}
