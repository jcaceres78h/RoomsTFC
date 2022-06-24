import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/servicios/favoritos/favoritos.service';
import axios from 'axios';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user : any

  constructor(private favoritoService: FavoritosService, private ls: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    if (!this.ls.isLoggeado) {
      this.router.navigate(['iniciar-sesion'])
    }
    this.getFotos()
  }

  next(direction:string){

    if(direction == 'left'){
      alert('click!')
       // console.log('click!')
   }
   if(direction == 'right'){
        alert('click!')

    }
}
setFavorito(user:any): void {
  this.favoritoService.setFavoritoUser(user);
}

isFavorito(user:any){
  var favoritos = this.favoritoService.getFavoritosUser();
  var res = false;
  favoritos.forEach(usuario => {
    if(user.id == usuario.id)
      res = true;
  });
  return res;
}

  // fotos: any
  foto_perfil = '';
  getFotos() {
    axios.get(`http://167.99.46.205/index.php/api/images?type=user&id=${this.user.id}`)
      .then(e => {
        let foto = e.data.data[0]
        // this.fotos = e.data.data;
        this.foto_perfil = foto.file_path
        this.foto_perfil = "background: url('http://167.99.46.205"+this.foto_perfil+"') no-repeat center; background-size: cover;"
        // console.log(this.foto_perfil)
      })
      .catch(e => {
      })
  }

}
