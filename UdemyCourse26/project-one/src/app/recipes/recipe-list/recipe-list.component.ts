import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipeSubscritption : Subscription;

  recipes: Recipe []  = [

  ];

  constructor(private recipeService : RecipeService,
              private router : Router ,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeSubscritption =  this.recipeService.recipiesChanged.subscribe(
      (recipies : Recipe[]) => {
        this.recipes = recipies;
      }
    );

    this.recipes = this.recipeService.getRecipes();

  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  // onRecipeSelected( recipe : Recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  ngOnDestroy(){
    this.recipeSubscritption.unsubscribe();

  }

}
