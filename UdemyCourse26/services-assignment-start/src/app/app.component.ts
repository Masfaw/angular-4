import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeUsers: string [] = [] ;
  inactiveUsers: string []= [];

  constructor(private userservice: UsersService) {}


  ngOnInit() {
    this.activeUsers = this.userservice.activeUsers;
    this.inactiveUsers = this.userservice.inactiveUsers;
  }

}
