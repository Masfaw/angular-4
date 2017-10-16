import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe []  = [
    new Recipe("A Test Recipe","This is simply a test" , 'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg' ),
    new Recipe("A Test Recipe","This is simply a test" , 'http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
