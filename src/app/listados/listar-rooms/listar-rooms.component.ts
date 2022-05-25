import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/servicios/room/room.service';

@Component({
  selector: 'app-listar-rooms',
  templateUrl: './listar-rooms.component.html',
  styleUrls: ['./listar-rooms.component.css']
})
export class ListarRoomsComponent implements OnInit {

  @Input() titulo:any
  @Input() rooms:any

  constructor() { }

  ngOnInit(): void {
  }
  




  

}
