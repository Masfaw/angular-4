import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = [
    'ford', 'chevrolet', 'Buick'
  ];


  myData () {
    return 'this is my data, man!';
  }

}
