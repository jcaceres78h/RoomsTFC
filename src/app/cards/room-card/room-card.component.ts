import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/servicios/favoritos/favoritos.service';

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
    return this.favoritoService.getFavoritosRoom().includes(room);
  }

}
