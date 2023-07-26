import React, { useState, useEffect } from 'react';

const MealsList = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                setMeals(data.meals);
            } catch (error) {
                console.error('Pas de réponse:', error);
            }
        };

        fetchMeals();
    }, []);

    return (
        <div>
            <h2>Liste des recettes de cuisine :</h2>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                ))}
            </ul>
        </div>
    );
};

export default MealsList;
