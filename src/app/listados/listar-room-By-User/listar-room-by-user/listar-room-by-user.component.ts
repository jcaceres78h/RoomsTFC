import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/servicios/room/room.service';
import { LoginService } from '../../../servicios/login/login.service';
import { UserService } from '../../../servicios/user/user.service';

@Component({
  selector: 'app-listar-room-by-user',
  templateUrl: './listar-room-by-user.component.html',
  styleUrls: ['./listar-room-by-user.component.css']
})
export class ListarRoomByUserComponent implements OnInit {

  id: any;
  constructor(private roomService: RoomService, private userService: UserService,
              private ac: ActivatedRoute, private ls: LoginService) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')});
    if (!this.id) {
      if (this.ls.isLoggeado) {
        this.id = this.ls.userLogged;
      }
    }
    this.roomService.getUpdateRoomsByUserId(this.id);
  }

  get rooms(){
    // console.log(this.roomService.getRoomsByUserId())
     return this.roomService.getRoomsByUserId();
  }

  get userName() {
    return this.userService.getUserById().name;
  }
}
