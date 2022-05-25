import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  buscarPorLocalidad(localidad:string){
    let url = '/resultados-room/'+localidad;
    //window.location.href(url);
    this.router.navigate([url])
  }

  scrollToBuscador() {
    // @ts-ignore
    document.getElementById( 'buscadorInput' ).focus();
    // @ts-ignore
    document.getElementById( 'buscadorScroll' ).scrollIntoView();

  }
}
