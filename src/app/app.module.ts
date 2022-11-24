import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ? Modules
import { AppRoutingModule } from './app-routing.module';

// ? Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './pages/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './pages/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RecipeBookComponent } from './pages/recipe-book/recipe-book.component';

const COMPONENTS = [
  AppComponent,
  HeaderComponent,
  RecipesComponent,
  RecipeListComponent,
  RecipeDetailComponent,
  RecipeItemComponent,
  ShoppingListComponent,
  ShoppingEditComponent,
];

@NgModule({
  declarations: [...COMPONENTS, NotFoundComponent, RecipeBookComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
