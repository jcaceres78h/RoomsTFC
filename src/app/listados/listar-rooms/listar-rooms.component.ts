import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomFiltrosService } from 'src/app/servicios/room/room-filtros.service';
import { RoomService } from 'src/app/servicios/room/room.service';

@Component({
  selector: 'app-listar-rooms',
  templateUrl: './listar-rooms.component.html',
  styleUrls: ['./listar-rooms.component.css']
})
export class ListarRoomsComponent implements OnInit {

  @Input() titulo:any
  @Input() rooms:any

  constructor(private roomfiltros: RoomFiltrosService) { }

  ngOnInit(): void {
    this.roomfiltros.reset()
  }

  getpriceMax(){
    return this.roomfiltros.getPriceMax()
  }
  getpriceMin(){
    return this.roomfiltros.getPriceMin()
  }

  getnumCompaneros(){
   return this.roomfiltros.getnumCompaneros()
 }
  getgenCompaneros(){
   return this.roomfiltros.getgenCompaneros()
 }
  getTipoCama(){
   return this.roomfiltros.getTipoCama()
 }
  getAmueblada(){
   return this.roomfiltros.getAmueblada()
 }
  getBanoPrivado(){
   return this.roomfiltros.getbanoPrivado()
 }
  getVistaPrivada(){
   return this.roomfiltros.getVistaPrivada()
 }
  getInternet(){
   return this.roomfiltros.getInternet()
 }
  getAscensor(){
   return this.roomfiltros.getAscensor()
 }
  getLavadora(){
   return this.roomfiltros.getLavadora()
 }
  getSecadora(){
   return this.roomfiltros.getSecadora()
 }
  getLavavajillas(){
   return this.roomfiltros.getLavavajillas()
 }
  getJardin(){
   return this.roomfiltros.getJardin()
 }
  getBalcon(){
   return this.roomfiltros.getBalcon()
 }
  getCalefaccion(){
   return this.roomfiltros.getCalefaccion()
 }
  getPortero(){
   return this.roomfiltros.getPortero()
 }
  getAccesible(){
   return this.roomfiltros.getAccesible()
 }
  getParking(){
   return this.roomfiltros.getParking()
 }
  getAireAcondicionado(){
   return this.roomfiltros.getAireAcondicionado()
 }
  getFumar(){
   return this.roomfiltros.getFumar()
 }
  getMascota(){
   return this.roomfiltros.getMascota()
 }
  getParejas(){
   return this.roomfiltros.getParejas()
 }
}
