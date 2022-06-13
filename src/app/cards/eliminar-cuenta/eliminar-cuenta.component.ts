import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';
import { UserService } from '../../servicios/user/user.service';

@Component({
  selector: 'app-eliminar-cuenta',
  templateUrl: './eliminar-cuenta.component.html',
  styleUrls: ['./eliminar-cuenta.component.css']
})
export class EliminarCuentaComponent implements OnInit {

  @Input() mostrarCardEliminar = false

  constructor(private us: UserService, private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  cerrarPopUp(){
    this.mostrarCardEliminar = !this.mostrarCardEliminar
    console.log(this.mostrarCardEliminar)
  }

  eliminarPerfil() {
    //TODO revisar, no eliminar el perfil
    let id = this.ls.userLogged
    this.ls.logOut()
    this.us.deleteUser(id);
    this.router.navigate([''])
  }

}
