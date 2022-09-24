function RecipeComponent ({image, dishName, calories, ingredients, link}) {
    return (
        <div className="recipeBox">
            <div>
                <img className="recipePic" src={image} alt={dishName}/>
            </div>
            <div className="recipeTxt">
                <a href={link} target='_blank'>
                    <h2>{dishName}</h2>
                </a>
                <p>{Math.round(calories)} calories</p>
                <ul>
                    {ingredients.map ((ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    )))}
                </ul>
                {/* <p>steps?</p> */}
            </div>
        </div>

    )
}

export default RecipeComponent;