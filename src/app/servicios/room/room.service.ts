import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private allRooms: any;

  private localityRoom: any;

  private userRoom: any;

  private idRoom: any;

  async updateAllRooms() {
    try {
      const response = await axios.get('/api/room');
      this.allRooms = response.data;
    } catch (e) {
      console.error(e);
    }
  }

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'authorization': '750e8b43e5ed564462c90ef0d382db26'
    })
  };


  constructor(private http : HttpClient) {  }

  getAllRoom(){
      return this.allRooms;
  }

  /*async getUpdateRoomById(id: number) {
    if (this.idRoom != null && this.idRoom.id == id) {
      // console.log("Hola mundo")
      return this.idRoom
    } else {
      // console.log("Adios mundo")
      try {
        const response = await axios.get('/api/room/' + id);
        this.idRoom = response.data;
        return this.idRoom;
      } catch (e) {
        // @ts-ignore
        this.idRoom = e.response.data
        // @ts-ignore
        return e.response.data
      }
    }
  }*/
  getUpdateRoomById(id: number) {
    if (this.idRoom != null && this.idRoom.id == id) {
      // console.log("Hola mundo")
      return this.idRoom
    } else {
      // console.log("Adios mundo")
      this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/"+id).subscribe(
        (response) => {
           //console.log(response);
          this.idRoom = response
        })
    }
  }

  getRoomById() {
      return this.idRoom;
  }

 /* async getRoomByLocalityName(locality: string) {
    if (this.localityRoom && this.localityRoom.length > 0 && this.localityRoom[0].locality == locality) {
      console.log("Se ha encontrado el locality")
      return this.localityRoom
    } else {
      console.log("No se ha encontrado el locality")
      try {
        const response = await axios.get('/api/room/locality/' + locality);
        this.localityRoom = response.data;
        return this.localityRoom;
      } catch (e) {
        // @ts-ignore
        return e.response.data
      }
    }
  }*/

  getRoomByLocality()
  {
     console.log("Entrando a room")
     console.log(this.localityRoom)
      return this.localityRoom;
  }

  getUpdateRoomByLocality(locality: string)
  {
    console.log(`Entrando a getUpdateRoomByLocality con ${locality}`)
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/locality/"+locality).subscribe(
      (response) => {
         console.log(response);
        this.localityRoom = response
      })
  }

  getUpdateRoomsByUserId(userId: number)
  {
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/user/"+userId).subscribe(
      (response) => {
        // console.log(response);
        this.userRoom = response
      })
  }

  getRoomsByUserId()
  {
      return this.userRoom;
  }

/*  postNewRoom(room : JSON)
  {
    let json = JSON.stringify(room);
    let params = "json="+json;
    return this.http.post( "http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/", params, this.httpOptions);
  }*/

  status: any = null

  async postNewRoom(room: any) {
    try {
      this.status = await axios.post('/api/room', room)
    } catch (e) {
      this.status = {
        // @ts-ignore
        estado: e.response.data.status,
        // @ts-ignore
        errores: e.response.data.errors
      }
    }
    return this.status;
  }

}
