import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './styles/styles.css'

// ==================================================================

const App = () => {

  const APP_ID = 'b8e84cf5';
  const APP_KEY = '95eb91940e183872739ef92440563fe2';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  // ONLY SUBMIT REQUEST AFTER CLICK
  // REMOVE DEFAULT SEARCH
  const [query, setQuery] = useState('');

  // MAKE REQUEST FROM API
  // ASYNC/AWAIT REQUEST FOR DATA IN JSON
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [getRecipes, query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (

    <div className='App'>

      <header className='title container'>
        <h1 className='container'>Let's get delicious</h1>
      </header>

      <div className='body wrapper'>

        <p className='intro'>No need to resort to takeout.  Find something delicious to make tonight.</p>

        <p>Type in an ingredient you have on hand and get some tasty inspiration!</p>

        <form onSubmit={getSearch} className='search-form'>
          <input className='search-bar' type="text" value={search} onChange={updateSearch} placeholder="Enter an ingredient"></input>
          <button className='search-btn' type="submit">Search</button>
        </form>

        <div className='results-section container'>
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
              ingredients={recipe.recipe.ingredients}
              yield={recipe.recipe.yield}
            />
          ))}
        </div>

      </div>
    </div>
  )
};

export default App;
