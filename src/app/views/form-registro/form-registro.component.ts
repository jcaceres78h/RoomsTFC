import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  constructor(private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
    if (this.ls.isLoggeado)
      this.router.navigate([''])
  }

}
