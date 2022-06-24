import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import { UserService } from '../../servicios/user/user.service';
import axios from 'axios';
import { ValidacionesService } from '../../servicios/validaciones/validaciones.service';
import { ImageService } from '../../servicios/imagen/image.service';

@Component({
  selector: 'app-editar-perfil-usuario',
  templateUrl: './editar-perfil-usuario.component.html',
  styleUrls: ['./editar-perfil-usuario.component.css']
})
export class EditarPerfilUsuarioComponent implements OnInit {

  mostrarCardEliminar = true

  constructor(private us: UserService, private ls: LoginService,
              private validation: ValidacionesService, private imageService: ImageService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) {
      this.router.navigate(['iniciar-sesion'])
    }
    this.us.getUserUpdateById(this.ls.userLogged)
    this.getFotos();
  }

  abrirEliminarCard(){
    this.mostrarCardEliminar = !this.mostrarCardEliminar
  }

  get usuario(){
    return this.us.editUser
  }


  //Fotografías
  fotos: any
  foto_perfil = '';
  getFotos() {
    axios.get(`http://167.99.46.205/index.php/api/images?type=user&id=${this.ls.userLogged}`)
      .then(e => {
        this.fotos = e.data.data;
        if (this.fotos[0])
        this.foto_perfil = this.fotos[0].file_path
      })
  }


  estudioTrabajo(): boolean {
    return this.usuario.studing && this.usuario.working;
  }

  restarMate() {
    if (this.usuario.num_roommate > 0)
      this.usuario.num_roommate--;
  }

  sumarMate() {
    if (this.usuario.num_roommate < 10)
      this.usuario.num_roommate++;
  }

  //Botón volver
  volver() {
    //TODO función para volver atrás en la navegación
    window.history.back();
  }

  errorName = false
  errorEmail = false
  errorTelefono = false
  errorAboutMe = false
  errorLocality = false
  validate(): boolean {
    let validation = true;
    if (!this.validation.validateUser(this.usuario.name)) {
      validation = false;
      this.errorName = true
    }
    if (!this.validation.validateEmail(this.usuario.email)) {
      validation = false;
      this.errorEmail = true;
    }
    if (!this.validation.validateEditPhone(this.usuario.phone)) {
      validation = false;
      this.errorTelefono = true
    }
    if (!this.validation.validateDescription(this.usuario.about_me)) {
      validation = false;
      this.errorAboutMe = true;
    }
    if (!this.validation.validateLocalidad(this.usuario.locality)) {
      validation = false
      this.errorLocality = true
    }
    return validation
  }

  guardar() {
    if (this.validate()) {
      this.us.editarUsuario(this.usuario)
        .then(e => {
          // console.log(e)
        })
    }
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
    this.imageService.uploadImage(file, 'user', this.usuario.id)
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
