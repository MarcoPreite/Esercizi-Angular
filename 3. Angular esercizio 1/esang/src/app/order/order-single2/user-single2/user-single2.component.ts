import { Component, OnInit } from '@angular/core';
import { User } from '@app/Models/User';

@Component({
  selector: 'esang-user-single2',
  templateUrl: './user-single2.component.html',
  styleUrls: ['./user-single2.component.css']
})
export class UserSingle2Component implements OnInit {
  user2: User [] = [
  {
    id: 2,
    code: 'fgh34ij',
    name: 'Roberta',
    surname: 'Grigi',
    location: 'Lecce',
  },
] 

  constructor() { }

  ngOnInit(): void {
  }

}
