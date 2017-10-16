import { Component } from '@angular/core';
import { DataService } from './data.service';
import {trigger, state, style,transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  template: `
 
   <p [@myAwesomeAnimation] = 'state'(click) ="animateMe()" > I will animate</p>
  
  `,
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
      p{
        width :200px ;
        background : lightgray;
        margin: 100px auto;
        text-align: center;
        padding : 20px;
        font-size : 1.5em;
      }
  `], 
  animations : [
    trigger('myAwesomeAnimation', [
      state ('small', style({
        transform : 'scale(1)',
      })),
      state ('large', style({
        transform : 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity : 0, transform: 'translateY(-75%)', offset : 0}),
        style({opacity : 1, transform: 'translateY(35px)', offset : .5}),
        style({opacity : 1, transform: 'translateY(-0)', offset :1}),
      ]))),
    ]),
  ]
})
export class AppComponent {

  state: string = 'small';
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }


  constructor(private dataService : DataService){

  }

  someProperty : string = ''; 

  ngOnInit (){
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();

  }

 // title = 'app';

  // myObject = {
  //   gender: 'male',
  //   age: 33,
  //   location: 'USA'
  // } 

  // myArr = ['him', 'hers', 'yours'];

  //angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';
 // angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';

  //buttonStatus = 'enabled';

  // <h1> Hey Guys! </h1>
  
  //  <img src = "{{angularLogo}}">
  //  <img [src] = "angularLogo">
  //  <img bind-src = "angularLogo">

  //  <button [disabled] = "buttonStatus == 'enabled'"> My Button </button>
  // myEvent(event){
  //   console.log(event);  <button (mouseenter) = "myEvent($event)"> My Button </button>
  // }

  // titleStyle = false;

// titleClasses = {
//   'red-title' : true,
//   'large-title': true
// }

}
