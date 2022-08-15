import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  function addRecipe(recipe) {
    setRecipes((currentRecipes) => [...currentRecipes, recipe]);
  }

const deleteRecipe = (recipeToDelete) => setRecipes((currentRecipes) => currentRecipes.filter((_, i) => i !== recipeToDelete));
 //   setRecipes((currentRecipes) => currentRecipes.filter((_, i) => i !== recipeToDelete));
  //}
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
