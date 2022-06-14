import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../servicios/user/user.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private ac: ActivatedRoute, private us: UserService) { }

  id: any
  ngOnInit(): void {
    this.ac.paramMap.subscribe(params => {this.id = params.get('id')});
    if (this.id) {
      this.us.getUserUpdateById(this.id)
    }
  }

  get user() {
    return this.us.getUserById();
  }


}
