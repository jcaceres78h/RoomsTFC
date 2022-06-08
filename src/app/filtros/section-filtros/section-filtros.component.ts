import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/servicios/room/room.service';

@Component({
  selector: 'app-section-filtros',
  templateUrl: './section-filtros.component.html',
  styleUrls: ['./section-filtros.component.css']
})
export class SectionFiltrosComponent implements OnInit {

  mostrarCard = true

  constructor(private router: Router, private roomService: RoomService) { }

  ngOnInit(): void {
  }

  mostrarCardFiltros(){
    this.mostrarCard = !this.mostrarCard
  }

  buscarPorLocalidad(localidad:string){
    if(localidad){
      //recargar la página para que se note que cambia de búsqueda, pero tiene que recargar antes de mostrar los cambios
      // window.location.reload()
      let url = '/resultados-room/';
      this.router.navigate([url, localidad])
      this.roomService.getUpdateRoomByLocality(localidad)
      // window.location.reload()

    }
  }

}
