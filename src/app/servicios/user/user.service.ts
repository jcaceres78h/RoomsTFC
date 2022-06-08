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
      this.getUpdateAllUser();
      return this.allUsers;
  }

  getUserUpdateById(id: number)
  {
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/user/"+id).subscribe(
      (response) => {
        // console.log(response);
        this.userId = response
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
      this.status = await axios.post('/api/user', user)
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
}
