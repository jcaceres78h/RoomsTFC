import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/servicios/room/room.service';

@Component({
  selector: 'app-listar-rooms',
  templateUrl: './listar-rooms.component.html',
  styleUrls: ['./listar-rooms.component.css']
})
export class ListarRoomsComponent implements OnInit {

  localidad:any

  constructor(private roomService: RoomService, private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {this.localidad = params.get('localidad')})
    this.roomService.getUpdateRoomByLocality(this.localidad);

  }

  getRooms(){
    console.log(this.roomService.getRoomByLocality())
     return this.roomService.getRoomByLocality();
  }



  

}
