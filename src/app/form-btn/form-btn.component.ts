import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-btn',
  templateUrl: './form-btn.component.html',
  styleUrls: ['./form-btn.component.css']
})
export class FormBtnComponent implements OnInit {

  @Input() titulo = "";
  @Input() descripcion = "";

  @Output() clickedBtn: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick() {
    this.clickedBtn.emit(true);
  }

}
