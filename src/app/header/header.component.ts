import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../servicios/user/user.service';
import { LoginService } from '../servicios/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  mostrarPerfil = true
  mostrarNav = false
  mostrarMenu = true
  ancho: any
  enlace: any

  constructor(private us: UserService, private ls: LoginService, private router: Router) {
  }

  get isLogeado() {
    return this.ls.isLoggeado
  }

  get nameLogged() {
    return this.ls.nameLogged;
  }

  ngOnInit(): void {
    console.log("entrando a oninit")

    /* //this.ancho = document.querySelector('.main_principal')?.clientWidth;
    this.ancho = screen.width
    if(this.ancho < 1280){
      this.mostrarNav = true
      const menu = document.querySelector('#logoBox')
      menu?.classList.add('menu_responsive')
    }else{
      this.mostrarMenu = true
      const menu = document.querySelector('#logoBox')
      menu?.classList.remove('menu_responsive')
    }
    console.log(this.ancho) */

  }



  mostrarPerfilCard(){
    this.mostrarPerfil = !this.mostrarPerfil
  }

  showMenu(){
    this.mostrarMenu = !this.mostrarMenu
    this.enlace = document.querySelectorAll('li')
    this.enlace.addEventListener("click", this.showMenu())
    console.log(this.enlace)
  }

  logOut() {
    this.ls.logOut();
    this.router.navigate([''])
  }

}
