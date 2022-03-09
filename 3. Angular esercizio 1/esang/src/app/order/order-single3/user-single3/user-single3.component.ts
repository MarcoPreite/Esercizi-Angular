import { Component, OnInit } from '@angular/core';
import { User } from '@app/Models/User';

@Component({
  selector: 'esang-user-single3',
  templateUrl: './user-single3.component.html',
  styleUrls: ['./user-single3.component.css']
})
export class UserSingle3Component implements OnInit {
  user3: User [] = [
    {
      id: 3,
      code: 'klm56no',
      name: 'Francesco',
      surname: 'Verdi',
      location: 'Palermo',
    },
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
