import { Component, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/servicios/favoritos/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  constructor(private favoritoService: FavoritosService) { }

  ngOnInit(): void {
  }

  getFavoritosRoom(){
    console.log(this.favoritoService.getFavoritosRoom())
    return this.favoritoService.getFavoritosRoom();
  }
  getFavoritosUser(){
    return this.favoritoService.getFavoritosUser();
  }
}
