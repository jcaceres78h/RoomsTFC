import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/servicios/room/room.service';

@Component({
  selector: 'app-resultados-room',
  templateUrl: './resultados-room.component.html',
  styleUrls: ['./resultados-room.component.css']
})
export class ResultadosRoomComponent implements OnInit {

  localidad:any
  
  constructor(private roomService: RoomService, private ac: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {this.localidad = params.get('localidad')})
    this.roomService.getUpdateRoomByLocality(this.localidad);
  }

  get rooms(){
    console.log(this.roomService.getRoomByLocality())
     return this.roomService.getRoomByLocality();
  }

}
