import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'esang-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() classes!: string | object | [];


  constructor() { }

  ngOnInit(): void {
  }

}
