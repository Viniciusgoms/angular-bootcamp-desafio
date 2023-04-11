import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-section-home-principal',
  templateUrl: './title-section-home-principal.component.html',
  styleUrls: ['./title-section-home-principal.component.css']
})
export class TitleSectionHomePrincipalComponent implements OnInit {

  @Input()
  titleSection:string=""

  constructor() { }

  ngOnInit() {
  }

}
