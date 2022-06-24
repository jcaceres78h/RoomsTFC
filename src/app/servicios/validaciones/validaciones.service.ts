import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  constructor() { }

  validateUser(user: string): boolean {
    return !!user.match(/^[a-zA-ZÁÉÍÓÚÑÜáéíóúñü\d\s_-]{3,32}$/);
  }

  validatePassword(password: string): boolean {
    return !!password.match(/^.{4,18}$/);
  }

  validateEmail(email: string): boolean {
    return !!email.match(/^[a-zA-Z\d._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
  }

  validatePostCode(postcode: number): boolean {
    return postcode <= 52999 && postcode >= 1000;
  }

/*  validatePostCodeString(postcode: string): boolean {
    return !!postcode.match(/^[0-5]\d{4}$/);
  }*/

  validateNumero(numero: number): boolean {
    return numero >= 0 && numero <= 99999;
  }

  validateLocalidad(localidad: string): boolean {
    return !!localidad.match(/^[a-zA-ZÁÉÍÓÚÑÜáéíóúñü\s\d]{3,64}$/);
  }

  validateLocalidadUser(localidad: string): boolean {
    return !(localidad.length > 0 && !localidad.match(/^[a-zA-ZÁÉÍÓÚÑÜáéíóúñü\d\s]{3,64}$/));
  }

  validatePhone(phone: string): boolean {
    return !(phone.length > 0 && !phone.match(/^[6789]\d{8}$/));
  }

  validateEditPhone(phone: string): boolean {
    return !!phone.match(/^[6789]\d{8}$/);
  }

  validateEdad(edad: number): boolean {
    if (edad == 0) return true;
    else return edad >= 16 && edad <= 65;
  }

  validateDescription(description: string): boolean {
    return description.length >= 5
  }

  validateAboutMe(aboutMe: string): boolean {
    return !(aboutMe.length > 0 && aboutMe.length < 5);
  }

  validateCalle(calle: string): boolean {
    return !!calle.match(/^[a-zA-ZÁÉÍÓÚÑÜáéíóúñü\d\s._-]{3,64}$/);
  }

  validateProvincia(provincia: string): boolean {
    return !!provincia.match(/^[a-zA-ZÁÉÍÓÚÑÜáéíóúñü\d\s]{3,32}$/);
  }

  validatePais(pais: string): boolean {
    return !!pais.match(/^[a-zA-ZÁÉÍÓÚÑÜáéíóúñü\d\s]{3,32}$/);
  }

  validatePrecio(precio: number): boolean {
    return precio >= 0;
  }
}
