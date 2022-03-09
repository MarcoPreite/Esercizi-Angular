import { Component, Input, OnInit } from '@angular/core';
import { User } from '@app/Models/User';

@Component({
  selector: 'esang-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user!: User;
  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  
}
