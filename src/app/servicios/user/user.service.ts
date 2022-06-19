import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private allUsers: any;
  private userId : any;


  constructor(private http : HttpClient) { this.getUpdateAllUser();}

  getUpdateAllUser(){
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/user").subscribe(
      (response) => {
        console.log(response);
        this.allUsers = response;
      })
  }

  getAllUser(){
      //this.getUpdateAllUser();
      return this.allUsers;
  }

  editUser: any
  get editUsuario() {
    return this.editUser
  }

  getUserUpdateById(id: number)
  {
    this.http.get("/api/user/"+id).subscribe(
      (response) => {
        // console.log(response);
        this.userId = response
        this.editUser = this.userId
      })
      //return user;
  }

  getUserById()
  {
      return this.userId;
  }

  status: any = null

  async postNewUser(user: any) {
    try {
      user.locality = user.locality.toLowerCase()
      this.status = await axios.post('/api/user', user)
      console.log(this.status)
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

  async getEstado() {
    return this.status
  }

  async getTodosUsuarios() {
    try {
      const response = await axios.get('/api/user');
      return response.data;
    } catch (e) {
      // @ts-ignore
      return e.response.data.status;
    }
  }

  deleteUser(userId: number)
  {
    try{
    this.http.delete("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/user/"+userId)
      .subscribe(e => {
        console.log(e)
      })
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

  async editarUsuario(user: any) {
    user.locality = user.locality.toLowerCase();
    await axios.put('/api/user', user)
      .then(e => {
        this.status = e
      })
      .catch(e => {
        this.status = {
          estado: e.response.data.status,
          errores: e.response.data.errors
        }
      })
    return this.status
  }
}
