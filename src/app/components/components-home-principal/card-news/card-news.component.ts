import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.css']
})
export class CardNewsComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardNewsTitle:string =""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit() {
  }

}
