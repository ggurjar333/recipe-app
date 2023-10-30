import React, { useState } from 'react';

interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string;
}

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState('');

  const addRecipe = () => {
    const newRecipe = { title, ingredients, instructions };
    setRecipes([...recipes, newRecipe]);
    setTitle('');
    setIngredients([]);
    setInstructions('');
  };

  return (
    <div>
      <h1>My Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.title}</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{recipe.instructions}</p>
          </li>
        ))}
      </ul>
      <h2>Add Recipe</h2>
      <form onSubmit={addRecipe}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Ingredients:
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <input type="text" value={ingredient} onChange={e => {
                  const newIngredients = [...ingredients];
                  newIngredients[index] = e.target.value;
                  setIngredients(newIngredients);
                }} />
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => setIngredients([...ingredients, ''])}>Add Ingredient</button>
        </label>
        <label>
          Instructions:
          <textarea value={instructions} onChange={e => setInstructions(e.target.value)} />
        </label>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default App;