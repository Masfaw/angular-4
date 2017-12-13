import {Injectable} from "@angular/core";
import { Http,Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import 'rxjs/RX';
import {Recipe} from "../recipes/recipe.model";

@Injectable()
export class DataStorageService{
  constructor(private http: Http,
              private recipeService : RecipeService){}

  storeRecipies(){
    return this.http.put('https://udemy-recipe-bok.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipies (){
    this.http.get('https://udemy-recipe-bok.firebaseio.com/recipes.json')
      .map(
        (response : Response) =>{
          const recipes : Recipe[] = response.json();
          for ( let recipe of recipes ){
            if (!recipe['ingredients']){
               recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recpies: Recipe[]) =>{
          this.recipeService.setRecipes(recpies);

          }
      );
  }

}
