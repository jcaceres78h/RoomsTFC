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





}
