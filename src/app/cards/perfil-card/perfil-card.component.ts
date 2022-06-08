import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-card',
  templateUrl: './perfil-card.component.html',
  styleUrls: ['./perfil-card.component.css']
})
export class PerfilCardComponent implements OnInit {

  constructor(private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.ls.logOut();
    this.router.navigate([''])
  }

  get nameLogged() {
    return this.ls.nameLogged;
  }
}
