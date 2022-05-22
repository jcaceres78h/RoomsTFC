import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.css']
})
export class ListarUsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUpdateAllUser();
  }

  getUsers(){
     console.log(this.userService.getAllUser())
     return this.userService.getAllUser();
   }


}
