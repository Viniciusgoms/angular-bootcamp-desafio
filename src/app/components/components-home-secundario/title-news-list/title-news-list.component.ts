import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-news-list',
  templateUrl: './title-news-list.component.html',
  styleUrls: ['./title-news-list.component.css']
})
export class TitleNewsListComponent implements OnInit {

  @Input()
  titleNewsList:string=""

  constructor() { }

  ngOnInit() {
  }

}
