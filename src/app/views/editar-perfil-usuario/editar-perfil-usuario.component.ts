import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import { UserService } from '../../servicios/user/user.service';
import axios from 'axios';

@Component({
  selector: 'app-editar-perfil-usuario',
  templateUrl: './editar-perfil-usuario.component.html',
  styleUrls: ['./editar-perfil-usuario.component.css']
})
export class EditarPerfilUsuarioComponent implements OnInit {

  mostrarCardEliminar = true

  constructor(private us: UserService, private ls: LoginService,
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
  validation(): boolean {
    let validate = false
    if (this.usuario.name.length <= 2) this.errorName = true
    if (!this.usuario.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) this.errorEmail = true
    if (!this.usuario.phone.match(/[6-9]\d{8,11}/)) this.errorTelefono = true
    if (this.usuario.about_me.length <= 5) this.errorAboutMe = true
    if (this.usuario.locality.length <= 2) this.errorLocality = true
    return validate
  }

  guardar() {
    console.log(this.usuario)
    if (!this.validation()) return
  }

}
