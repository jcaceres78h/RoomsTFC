import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-companero',
  templateUrl: './form-companero.component.html',
  styleUrls: ['./form-companero.component.css']
})
export class FormCompaneroComponent implements OnInit {

  titulo = "Te ayudamos a encontrar a tu compñaero ideal"
  descripcion = "Si tienes claro cómo sería tu compañero de piso perfecto"

  pasar = false;

  constructor() { }

  ngOnInit(): void {
  }

}
