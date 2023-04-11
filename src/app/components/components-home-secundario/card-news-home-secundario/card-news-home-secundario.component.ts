import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news-home-secundario',
  templateUrl: './card-news-home-secundario.component.html',
  styleUrls: ['./card-news-home-secundario.component.css']
})
export class CardNewsHomeSecundarioComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardNewsTitle:string =""
  @Input()
  cardNewsData:string =""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit() {
  }

}
