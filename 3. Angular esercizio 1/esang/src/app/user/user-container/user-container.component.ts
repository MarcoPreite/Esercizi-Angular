import { Component, OnInit } from '@angular/core';
import { User } from '@app/Models/User';

@Component({
  selector: 'esang-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {
  users: User [] = [
      {
        id: 1,
        code: 'abc12de',
        name: 'Mario',
        surname: 'Rossi',
        location: 'Roma',
        tasks: []
      },
      {
        id: 2,
        code: 'fgh34ij',
        name: 'Roberta',
        surname: 'Grigi',
        location: 'Lecce',
        tasks: []
      },
      {
        id: 3,
        code: 'klm56no',
        name: 'Francesco',
        surname: 'Verdi',
        location: 'Palermo',
        tasks: []
      },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
