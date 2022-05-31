import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarPerfil = true
  mostrarNav = false
  mostrarMenu = true
  ancho:any
  enlace:any
  
  constructor() {}
  
  ngOnInit(): void {

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

  



}
