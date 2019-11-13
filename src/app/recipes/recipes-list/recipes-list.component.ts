import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test-1', 'sample recipe-1', 'https://cdn2.vectorstock.com/i/1000x1000/77/66/recipe-word-text-typography-design-logo-icon-vector-21127766.jpg'),
    new Recipe('test-2', 'sample recipe-2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('test-3', 'sample recipe-3', 'https://dcassetcdn.com/design_img/10150/1674/1674_291296_10150_image.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
