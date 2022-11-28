import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ? Components
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecipeBookComponent } from './pages/recipe-book/recipe-book.component';
import { RecipeItemComponent } from './pages/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'book',
        pathMatch: 'full',
      },
      {
        path: 'recipe',
        component: RecipesComponent,
      },
      {
        path: 'shop',
        component: ShoppingListComponent,
      },
      {
        path: 'book',
        component: RecipeBookComponent,
      },
      {
        path: 'item',
        component: RecipeItemComponent,
      },
      {
        path: 'list',
        component: RecipeListComponent,
      },
      {
        path: 'detail',
        component: RecipeDetailComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
