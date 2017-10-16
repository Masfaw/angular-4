import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles : [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {

  userName = '';



  title = 'Does this Change';

  name = '';

  isUserNameEmpty(){

    return this.userName != "";
  }

  resetUserName(){
    this.userName = "";
  }
}
