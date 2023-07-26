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
            <h2 className="text-center">Liste des recettes de cuisine :</h2>
            <div className="container">
                <div className="row">
                    {meals.map((meal) => (
                        <div key={meal.idMeal} className="col-md-4">
                            <p className="d-flex flex-column align-items-center">{meal.strMeal}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MealsList;
