import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card-home-principal',
  templateUrl: './small-card-home-principal.component.html',
  styleUrls: ['./small-card-home-principal.component.css']
})
export class SmallCardHomePrincipalComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  smallCardTitle:string =""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit() {
  }

}
