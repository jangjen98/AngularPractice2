import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Cheese', 100),
    new Ingredient('Flour', 100),
    new Ingredient('Cheese', 100),
    new Ingredient('Flour', 100),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
