import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-home-principal',
  templateUrl: './big-card-home-principal.component.html',
  styleUrls: ['./big-card-home-principal.component.css']
})
export class BigCardHomePrincipalComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  bigCardTitle:string =""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"


  constructor() { }

  ngOnInit() {
  }

}
