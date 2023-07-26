import React, { useState, useEffect } from 'react';

const RandomMeal = () => {
    const [randomMeal, setRandomMeal] = useState(null);

    useEffect(() => {
        // Appel à l'API pour récupérer une recette aléatoire en utilisant fetch
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(data => {
                setRandomMeal(data.meals[0]);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération de la recette aléatoire', error);
            });
    }, []);

    return (
        <div className="random-meal container mt-4">
            {randomMeal ? (
                <div className="random-meal-content">
                    <h2>{randomMeal.strMeal}</h2>
                    <div className="random-meal-image">
                        <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} className="img-fluid" />
                    </div>
                    <p className="random-meal-instructions">{randomMeal.strInstructions}</p>
                </div>
            ) : (
                <p className="loading">LOADING...</p>
            )}
        </div>
    );
};

export default RandomMeal;
