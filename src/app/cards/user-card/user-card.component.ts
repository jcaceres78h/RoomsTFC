import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user : any

  constructor() { }

  ngOnInit(): void {
  }

  next(direction:string){
    
    if(direction == 'left'){
       window.alert('click!')
       console.log('click!')
   }
   if(direction == 'right'){
        window.alert('click!')

    }
}

}
