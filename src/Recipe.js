import React from 'react';
import './styles/styles.css'

const Recipe = ({image, title, ingredients}) => {
    return (
       
                <div className='recipe-card container'>
                    <img src={image} alt={title}></img>
                    <h2>{title}</h2>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul>
                </div>

        );
};

export default Recipe;