import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarPerfil = true

  constructor() { }

  ngOnInit(): void {
  }

  mostrarPerfilCard(){
    this.mostrarPerfil = !this.mostrarPerfil
  }


}
