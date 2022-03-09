import { Component, OnInit } from '@angular/core';
import { User } from '@app/Models/User';

@Component({
  selector: 'esang-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  user1: User [] = [
      {
      id: 1,
      code: 'abc12de',
      name: 'Mario',
      surname: 'Rossi',
      location: 'Roma'
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
