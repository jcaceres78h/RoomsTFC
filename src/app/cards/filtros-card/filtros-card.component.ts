import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtros-card',
  templateUrl: './filtros-card.component.html',
  styleUrls: ['./filtros-card.component.css']
})
export class FiltrosCardComponent implements OnInit {

  @Input() control:any

  constructor() { }

  ngOnInit(): void {
  }

}
