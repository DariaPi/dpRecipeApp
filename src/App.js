import {useEffect, useState} from 'react';
import video from './video.mp4';
import './App.css';
import RecipeComponent from './RecipeComponent';

function App() {
  const My_ID = "18179288";
  const My_Key = "21e8c86ee8d491649a991160e7b56e6b	";

  const [mySearch, setMySearch] = useState ("");
  const [recipesData, setRecipesData] = useState ([]);
  const [wordSubmited, setWordSubmited] = useState("");

  useEffect(() => {
    getRecipe();
  }, [wordSubmited])

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${mySearch}&app_id=${My_ID}&app_key=${My_Key}`);
    const data = await response.json();
    setRecipesData(data.hits);
  }

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmited(mySearch);
  }

  return (
    <div className="App">
      <div className='container'>
        <video className='video' autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>What are we cooking today?</h1>
      </div>
      <div className='container'>
        <form className='formBox' onSubmit={finalSearch}>
          <input className='input' placeholder="Search..." onChange={myRecipeSearch} value={mySearch}>
          </input>
        </form>
      </div>
      <div className='container'>
        <button className='ctaBtn'>
          let's go
        </button>
      </div>
      <div className='container'>
        {recipesData.map (element => (
          <RecipeComponent key={element.recipe.label}
            image={element.recipe.image}
            dishName={element.recipe.label}
            calories={element.recipe.calories} 
            ingredients={element.recipe.ingredientLines}
            link={element.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
