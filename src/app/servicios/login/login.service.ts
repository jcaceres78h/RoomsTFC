import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private us: UserService) {}

  async login (user: {email: string, password: string} = {email: '', password: ''}) {
    let id = -2;
    await this.us.getTodosUsuarios()
      .then(e => {
        id = this.comprobarContrasena(e, user)
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
          return users[i].id;
        }
        return -1;
      }
    }
    return -2;
  }
}
