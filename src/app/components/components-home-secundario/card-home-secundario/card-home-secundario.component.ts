import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-home-secundario',
  templateUrl: './card-home-secundario.component.html',
  styleUrls: ['./card-home-secundario.component.css']
})
export class CardHomeSecundarioComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit() {
  }

}
