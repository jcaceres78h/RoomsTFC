import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/servicios/favoritos/favoritos.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user : any

  constructor(private favoritoService: FavoritosService) { }

  ngOnInit(): void {
  }

  next(direction:string){

    if(direction == 'left'){
      alert('click!')
       console.log('click!')
   }
   if(direction == 'right'){
        alert('click!')

    }
}
setFavorito(user:any): void {
  this.favoritoService.setFavoritoUser(user);
  console.log("setFavorito")
}

isFavorito(user:any){
  return this.favoritoService.getFavoritosUser().includes(user);
}

}
