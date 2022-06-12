import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  id:any
  user:any

  constructor(private ac: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')})
    this.userService.getUserUpdateById(this.id)
  }

  getUser(){
    return this.userService.getUserById()
  }

  volver() {
    //TODO función para volver atrás en la navegación
    window.history.back();
  }

  estudioTrabajo(){
    if(this.getUser().studing && this.getUser().working)
      return 0
    else if (this.getUser().studing && !this.getUser().working)
      return 1
    else if(!this.getUser().studing && this.getUser().working)
      return 2
    else
      return 3
  }

  companeroPluralSingular(){
    if (this.getUser().num_roommate <= 1)
      return "compañero"
    else
    return "compañeros"
  }

  generoCompanero(){
    if (this.getUser().gen_roommate == 0)
      return "chicos"
    else if (this.getUser().gen_roommate == 1)
     return "chicas"
     else
      return "sin preferencias de género"
  }



}
