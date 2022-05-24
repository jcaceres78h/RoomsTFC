import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private allUsers: any;


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

  getUserById(id: number)
  {
    for(let user of this.allUsers){
      if(user.id == id)
        return user;
    }
    var user :any;
    this.http.get("http://loadbalancerroom-1781365273.us-east-1.elb.amazonaws.com/user/"+id).subscribe(
      (response) => {
        console.log(response);
        user = response
      })
      return user;
  }

}
