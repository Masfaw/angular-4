import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: []
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userServices: UsersService) {}

  ngOnInit(){

  }

  onSetToInactive(id: number) {

    this.userServices.setToInactive(id);
    // this.userSetToInactive.emit(id);
  }
}
