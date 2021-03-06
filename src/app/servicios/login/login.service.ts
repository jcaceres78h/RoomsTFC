import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
// @ts-ignore
import Cookies from "js-cookie";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private us: UserService) {}

  user: any;

  async login (user: {email: string, password: string} = {email: '', password: ''}) {
    let id = -2;
    await this.us.getTodosUsuarios()
      .then(e => {
        id = this.comprobarContrasena(e, user)
        if (id >= 0) {
          Cookies.set("userLogged", id.toString(), {expires: 1})
        }
      })
    return id;
  }

  comprobarContrasena(
    users: any,
    user: {email: string, password: string} = {email: '', password: ''}
  ): number {
    let encontrado = false
    for (let i = 0; i < users.length && !encontrado; i++) {
      if (user.email.toLowerCase() === users[i].email.toLowerCase()) {
        if (user.password === users[i].password) {
          Cookies.set("nombreLogged", users[i].name, {expires: 1})
          return users[i].id;
        }
        return -1;
      }
    }
    return -2;
  }

  get userLogged() {
    return Cookies.get("userLogged");
  }

  get nameLogged() {
    return Cookies.get("nombreLogged")
  }

  get isLoggeado() {
    return this.userLogged;
  }

  logOut() {
    this.user = false;
    Cookies.remove("nombreLogged")
    return Cookies.remove("userLogged");
  }

  get usuarioLogeado() {
    return this.user;
  }


}
