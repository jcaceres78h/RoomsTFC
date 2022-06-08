import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/servicios/room/room.service';

@Component({
  selector: 'app-resultados-room',
  templateUrl: './resultados-room.component.html',
  styleUrls: ['./resultados-room.component.css']
})
export class ResultadosRoomComponent implements OnInit{

  localidad:any
  localityRooms: any

  constructor(private roomService: RoomService, private ac: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log("Entrando a ngOnInit")
    this.ac.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {this.localidad = params.get('localidad')})
    this.roomService.getUpdateRoomByLocality(this.localidad);
    /*this.roomService.getRoomByLocalityName(this.localidad)
      .then(e => {
        // console.log(e)
        this.localityRooms = e
      })
    this.router.events.subscribe(e => {
      this.localityRooms = null;
      this.roomService.getRoomByLocalityName(this.localidad)
        .then(e => {
          // console.log(e)
          this.localityRooms = e
        })
    })*/
  }
  ngOnChanges(ac: any):void {
    console.log("cambio")
    this.ac.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {this.localidad = params.get('localidad')})
    this.roomService.getUpdateRoomByLocality(this.localidad);
    this.localityRooms = this.roomService.getRoomByLocality();
  }

  get rooms(){
    this.localityRooms = this.roomService.getRoomByLocality();
     return this.localityRooms;
  }

}
