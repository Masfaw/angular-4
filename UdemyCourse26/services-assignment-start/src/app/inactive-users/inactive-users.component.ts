import { Component, EventEmitter, Input, Output } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: []
})
export class InactiveUsersComponent {
  @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UsersService) {}

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    // this.userSetToActive.emit(id);
  }
}
