import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@app/Models/User';

@Component({
  selector: 'esang-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users: User [] = [];
  @Output() selected = new EventEmitter<User>();


  constructor() { }

  ngOnInit(): void {
  }
  
  select(user: User) {
    this.selected.emit(user)
  }

}
