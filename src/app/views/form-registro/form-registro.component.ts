import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import { ValidacionesService } from '../../servicios/validaciones/validaciones.service';
import { RegistroService } from '../../servicios/registro/registro.service';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor(private ls: LoginService, private validation: ValidacionesService,
              private rs: RegistroService, private router: Router) { }

  ngOnInit(): void {
    if (this.ls.isLoggeado)
      this.router.navigate([''])
    else this.rs.resetData()
  }

  get data() {
    return this.rs.data
  }

  errorNombre = false
  errorEmail = false
  errorPassword = false

  validarCampos(): boolean {
    let validado = true;

    if (!this.validation.validateUser(this.data.name)) {
      validado = false;
      this.errorNombre = true;
    }
    if (!this.validation.validateEmail(this.data.email)) {
      validado = false;
      this.errorEmail = true;
    }
    if (!this.validation.validatePassword(this.data.password)) {
      validado = false;
      this.errorPassword = true;
    }

    return validado;
  }

  crearCuenta() {
    if (this.validarCampos()) {
      this.router.navigate(['crear-cuenta'])
    }
  }

}
