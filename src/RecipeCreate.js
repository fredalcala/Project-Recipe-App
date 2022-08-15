import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const blankRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [recipeData, setRecipeData] = useState({ ...blankRecipe });

  function handleSubmit(event) {
    event.preventDefault();
    const newRecipe = recipeData;
    addRecipe(newRecipe);
    console.log("Submitted: ", newRecipe);
    setRecipeData({...blankRecipe});
    //console.log("Submitted: ", recipeData);
  }

  const handleInputChange = (event) => {
    setRecipeData({ ...recipeData, [event.target.name]: event.target.value });
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                value={recipeData.name}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                type="text"
                placeholder="Cuisine"
                value={recipeData.cuisine}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                type="url"
                placeholder="Image URL"
                value={recipeData.photo}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                type="text"
                placeholder="Ingredients"
                value={recipeData.ingredients}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                type="text"
                placeholder="Preparation"
                value={recipeData.preparation}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
