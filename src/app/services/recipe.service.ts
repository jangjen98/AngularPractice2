import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Yummy Schnitzel',
      'This is a delicious schnitzel',
      'https://images.immediate.co.uk/production/volatile/sites/2/2021/10/WienerSchnitzel_015-d281ef4.jpg?quality=90&crop=13px,4395px,5656px,2433px&resize=556,505',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potatoes', 20),
        new Ingredient('Slice of lemon', 1),
        new Ingredient('Ketchup', 1),
      ]
    ),
    new Recipe(
      'Pizza Pepperoni Cheese',
      'Good taste and blooming in mouth',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [
        new Ingredient('Flour', 5),
        new Ingredient('Cheese Morazella', 3),
        new Ingredient('Pepperoni', 3),
        new Ingredient('Bread', 1),
      ]
    ),
    new Recipe(
      'Big Burger Full Combo',
      'Full Combo Cheese, Meat and Onion in one',
      'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Onion', 3),
        new Ingredient('Beef', 1),
        new Ingredient('Morazella Cheese', 1),
      ]
    ),
    new Recipe(
      'Apple pie',
      'Sweetness comes to happiness',
      'https://www.inspiredtaste.net/wp-content/uploads/2019/11/Homemade-Apple-Pie-From-Scratch-1200.jpg',
      [new Ingredient('Flour', 5), new Ingredient('Apple', 3)]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShop(ingredients: Ingredient[]) {
    this.shoppingListService.changeIngredients(ingredients);
  }
}
