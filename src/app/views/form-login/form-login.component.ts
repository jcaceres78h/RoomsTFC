import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (this.ls.isLoggeado)
      this.router.navigate([''])
  }

  user = {
    email: '',
    password: ''
  }

  errorEmail = false;
  errorPassword = false;
  login() {
    this.ls.login(this.user)
      .then( e => {
        if (e >= 0) {
          window.history.back();
        }
        else if(e == -2) {
          this.errorEmail = true;
          this.errorPassword = true;
        }
        else if(e == -1) this.errorPassword = true;
      })
  }

  verContra(inputContra:any){
    if(inputContra){
      if(inputContra.type == "password"){
        inputContra.type = "text";
      }else{
        inputContra.type = "password";
      }
    }
  }
}
