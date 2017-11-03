import {Injectable, OnInit} from "@angular/core";
import {CounterService} from "./counter.service";

@Injectable()
export class UsersService  implements OnInit {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];



  constructor(private countService: CounterService) {}

  ngOnInit(){
    // this.changeCount = this.countservice.count
  }

  outputArrays (){
    console.log("Active users " + this.activeUsers);
    console.log("Inactive Users " + this.inactiveUsers);

  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    // this.outputArrays();
    this.countService.count ++;
    console.log(this.countService);

  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    // this.outputArrays();
    this.countService.count ++;
    console.log(this.countService);

  }



}
