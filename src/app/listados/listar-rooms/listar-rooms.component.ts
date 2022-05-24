import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/servicios/room/room.service';

@Component({
  selector: 'app-listar-rooms',
  templateUrl: './listar-rooms.component.html',
  styleUrls: ['./listar-rooms.component.css']
})
export class ListarRoomsComponent implements OnInit {

  localidad:any

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
    this.roomService.getUpdateAllRoom();
  }

  getRooms(){
     return this.roomService.getRoomByLocality('murcia');
  }

  

}
