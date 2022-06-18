import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/servicios/favoritos/favoritos.service';
import axios from 'axios';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room : any
  public type_bed : any
  public enlace:any

  constructor(private favoritoService: FavoritosService) { }

  ngOnInit(): void {
    this.tipoHabitacion()
    this.enlace = '/room/'+this.room.id;
    this.getFotos()
  }

  tipoHabitacion(){
    switch (this.room.bed_type) {
      case 0:
          this.type_bed = 'Habitación con literas'
        break;
        case 1:
          this.type_bed = 'Habitación individual'
        break;
        case 2:
          this.type_bed = 'Habitación doble'
        break;
      default: this.type_bed = 'Habitación'
        break;
    }
  }

  next(direction:string){
    if(direction == 'left'){
      alert('has hecho click izquierda')
    }
    if(direction == 'right'){
      alert('has hecho click derecha')
    }
  }

  setFavorito(room:any): void {
    this.favoritoService.setFavoritoRoom(room);
  }

  isFavorito(room:any){
    var favoritos = this.favoritoService.getFavoritosRoom();
    var res = false;
    favoritos.forEach(habitacion => {
      if(room.id == habitacion.id)
        res = true;
    });
    return res;
  }

  foto_perfil = '';
  getFotos() {
    axios.get(`http://167.99.46.205/index.php/api/images?type=room&id=${this.room.id}`)
      .then(e => {
        let foto = e.data.data[0]
        // this.fotos = e.data.data;
        this.foto_perfil = foto.file_path
        this.foto_perfil = "background: url('http://167.99.46.205"+this.foto_perfil+"') no-repeat center; background-size: cover;"
        console.log(this.foto_perfil)
      })
      .catch(e => {
      })
  }

}
