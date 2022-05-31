import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personas = [
    {
      nombre: 'Pedro Ballesta',
      foto: 'gigachad.jpg',
      descripcion: 'Desarrollador web y programador backend'
    },
    {
      nombre: 'Cintia Andújar',
      foto: 'gigachad.jpg',
      descripcion: 'Diseñadora y desarrolladora web, ' +
      'diseño UX/UI y programación frontend'
    },
{
  nombre: 'Jonathan Cáceres',
  foto: 'gigachad.jpg',
  descripcion: 'Desarrollador web y programador ' +
  'frontend'
}
]

}
