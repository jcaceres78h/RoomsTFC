import { Component, OnInit } from '@angular/core';
import { UserFiltrosService } from 'src/app/servicios/user/user-filtros.service';
import { UserService } from 'src/app/servicios/user/user.service';

@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.css']
})
export class ListarUsersComponent implements OnInit {

  constructor(private userService: UserService, private userfiltros: UserFiltrosService) { }

  ngOnInit(): void {
    this.userService.getUpdateAllUser();
  }

  getUsers(){
     console.log(this.userService.getAllUser())
     return this.userService.getAllUser();
   }

   getLocalidad(){
     return this.userfiltros.getlocality()
   }

   getnumCompaneros(){
    return this.userfiltros.getnumCompaneros()
  }
   getgenCompaneros(){
    return this.userfiltros.getgenCompaneros()
  }
   getTipoCama(){
    return this.userfiltros.getTipoCama()
  }
   getAmueblada(){
    return this.userfiltros.getAmueblada()
  }
   getBanoPrivado(){
    return this.userfiltros.getbanoPrivado()
  }
   getVistaPrivada(){
    return this.userfiltros.getVistaPrivada()
  }
   getInternet(){
    return this.userfiltros.getInternet()
  }
   getAscensor(){
    return this.userfiltros.getAscensor()
  }
   getLavadora(){
    return this.userfiltros.getLavadora()
  }
   getSecadora(){
    return this.userfiltros.getSecadora()
  }
   getLavavajillas(){
    return this.userfiltros.getLavavajillas()
  }
   getJardin(){
    return this.userfiltros.getJardin()
  }
   getBalcon(){
    return this.userfiltros.getBalcon()
  }
   getCalefaccion(){
    return this.userfiltros.getCalefaccion()
  }
   getPortero(){
    return this.userfiltros.getPortero()
  }
   getAccesible(){
    return this.userfiltros.getAccesible()
  }
   getParking(){
    return this.userfiltros.getParking()
  }


}
