import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
      return this.allUsers;
  }

  getUserUpdateById(id: number)
  {
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/user/"+id).subscribe(
      (response) => {
        console.log(response);
        this.userId = response
      })
      //return user;
  }

  getUserById()
  {
      return this.userId;
  }

  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'authorization': '750e8b43e5ed564462c90ef0d382db26'
    })
  };


  postNewUser(user : any)
  {
    let params = "json="+user;
    return this.http.post( "http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/room/", params, this.httpOptions);
  }
}
