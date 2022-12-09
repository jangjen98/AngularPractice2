import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  public ingredientsChanged = new EventEmitter<Ingredient[]>();
  public ingredientAdded = new EventEmitter<Ingredient>();
  private ingredients: Ingredient[] = [];
  constructor() {}
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  changeIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
