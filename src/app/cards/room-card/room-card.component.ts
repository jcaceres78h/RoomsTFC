import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input() room : any
  public type_bed : any
  public enlace:any

  constructor() { }

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

}
