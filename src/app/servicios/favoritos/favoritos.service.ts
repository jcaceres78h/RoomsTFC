import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  favoritosRoom: any[]
  favoritosUser: any[]
  constructor(private http: HttpClient) {
    if (localStorage.getItem("rooms")){
      this.favoritosRoom = JSON.parse(localStorage.getItem("rooms") as string);
    }else {
      this.favoritosRoom = new Array();
    }

    if (localStorage.getItem("users")){
      this.favoritosUser = JSON.parse(localStorage.getItem("users") as string);
    }else {
      this.favoritosUser = new Array();
    }
  }


  setFavoritoRoom(room: any) {
    if (room && !this.favoritosRoom.includes(room)){
      this.favoritosRoom.push(room)
    }
    else if(room){
      this.favoritosRoom.splice(this.favoritosRoom.indexOf(room),1)
    }
    this.actualizarFavs();
  }

  getFavoritosRoom(){
    return this.favoritosRoom
  }
  setFavoritoUser(user: any) {
    if (user && !this.favoritosUser.includes(user)){
      this.favoritosUser.push(user)
    }
    else if(user){
      this.favoritosUser.splice(this.favoritosUser.indexOf(user),1)
    }
    this.actualizarFavs();
  }

  getFavoritosUser(){
    return this.favoritosUser
  }

  actualizarFavs(){
    localStorage.setItem("rooms", JSON.stringify(this.favoritosRoom))
    localStorage.setItem("users", JSON.stringify(this.favoritosUser))
  }
}
