import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

}
