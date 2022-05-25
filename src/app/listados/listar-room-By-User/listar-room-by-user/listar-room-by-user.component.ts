import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/servicios/room/room.service';

@Component({
  selector: 'app-listar-room-by-user',
  templateUrl: './listar-room-by-user.component.html',
  styleUrls: ['./listar-room-by-user.component.css']
})
export class ListarRoomByUserComponent implements OnInit {

  id: any;
  constructor(private roomService: RoomService, private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')});
    this.roomService.getUpdateRoomsByUserId(this.id);
  }

  get rooms(){
    console.log(this.roomService.getRoomsByUserId())
     return this.roomService.getRoomsByUserId();
  }

}
