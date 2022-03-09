import { Component, OnInit } from '@angular/core';
import { Order } from '@app/Models/Order';

@Component({
  selector: 'esang-order-single3',
  templateUrl: './order-single3.component.html',
  styleUrls: ['./order-single3.component.css']
})
export class OrderSingle3Component implements OnInit {
  order3: Order [] = [
    {
      id: 3,
      code: 'klm56no',
      name: 'Francesco',
      surname: 'Verdi',
      description: 'Maglione verde',
      location: 'Palermo',
    },
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
