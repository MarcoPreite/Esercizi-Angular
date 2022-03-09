import { Component, OnInit } from '@angular/core';
import { Order } from '@app/Models/Order';

@Component({
  selector: 'esang-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.css']
})
export class OrderSingleComponent implements OnInit {
  order1: Order [] = [
    {
      id: 1,
      code: 'abc12de',
      name: 'Mario',
      surname: 'Rossi',
      description: 'Pantaloni rossi',
      location: 'Roma',
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
