import React from "react";
import Recipe from "./Recipe";

function RecipeList({recipes, deleteRecipe}) {
 
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  /*function deleteRecipe(recipeToDelete) {
    const currentRecipe = recipeToDelete.target.parentNode.parentNode.innerHTML;
    console.log(currentRecipe);
    setRecipes(recipe => 
      recipe.filter(recipe => !currentRecipe.includes(recipe.name)        
    ));
  }*/

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            recipe={recipe}
            deleteRecipe={() => deleteRecipe(i)} />
            ))} 
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
