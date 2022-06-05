import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(private ls: LoginService) { }

  ngOnInit(): void {
  }

  user = {
    email: '',
    password: ''
  }

  login() {
    console.log(`Entrando a login con usuario={${this.user.email},${this.user.password}}`)
    this.ls.login(this.user)
      .then( e => {
        console.log(e)
      })
  }
}
