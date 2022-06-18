import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

  registerData = {
    name: '',
    email: '',
    password: ''
  }

  setData(name?: string, email?: string, password?: string) {
    if (name) this.registerData.name = name;
    if (email)this.registerData.email = email;
    if (password) this.registerData.password = password;
  }

  resetData() {
    this.registerData.name = '';
    this.registerData.email = '';
    this.registerData.password = '';
  }

  get data() {
    return this.registerData;
  }

}
