import { Component, OnInit } from '@angular/core';
import { Order } from '@app/Models/Order';

@Component({
  selector: 'esang-order-single2',
  templateUrl: './order-single2.component.html',
  styleUrls: ['./order-single2.component.css']
})
export class OrderSingle2Component implements OnInit {
  order2: Order [] = [
    {
      id: 2,
      code: 'fgh34ij',
      name: 'Roberta',
      surname: 'Grigi',
      description: 'Berretto grigio',
      location: 'Lecce',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
