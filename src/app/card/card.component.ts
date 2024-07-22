import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  cardLink:string=""
  @Input()
  cardEducation:string = ""
  @Input()
  cardCourse:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  cardPhoto:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
