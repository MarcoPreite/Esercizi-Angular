import { Component, OnInit } from '@angular/core';
import { Order } from '@app/Models/Order';
import { User } from '@app/Models/User';

@Component({
  selector: 'esang-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.css']
})
export class OrderContainerComponent implements OnInit {

  users: User [] = [
      {
        id: 1,
        code: 'abc12de',
        name: 'Mario',
        surname: 'Rossi',
        location: 'Roma',
      },
      {
        id: 2,
        code: 'fgh34ij',
        name: 'Roberta',
        surname: 'Grigi',
        location: 'Lecce',
      },
      {
        id: 3,
        code: 'klm56no',
        name: 'Francesco',
        surname: 'Verdi',
        location: 'Palermo',
      },
  ]

  orders: Order [] = [
    {
      id: 1,
      code: 'abc12de',
      name: 'Mario',
      surname: 'Rossi',
      description: 'Pantaloni rossi',
      location: 'Roma',
    },
    {
      id: 2,
      code: 'fgh34ij',
      name: 'Roberta',
      surname: 'Grigi',
      description: 'Berretto grigio',
      location: 'Lecce',
    },
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
