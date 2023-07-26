import React, { useState } from 'react';

const SearchMeals = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
            if (!response.ok) {
                throw new Error('Réponse ok');
            }
            const data = await response.json();
            setSearchResults(data.meals || []);
        } catch (error) {
            console.error('Pas de réponse:', error);
            setSearchResults([]);
        }
    };

    return (
        <div>
            <h2 className="text-center">Rechercher des recettes de cuisine :</h2>
            <form onSubmit={handleSubmit} className="container d-flex justify-content-center mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            value={searchValue}
                            onChange={handleChange}
                            placeholder="Entrez un mot-clé..."
                            className="form-control"
                        />
                    </div>
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-primary">Rechercher</button>
                    </div>
                </div>
            </form>
            {searchResults.length > 0 ? (
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        {searchResults.map((meal) => (
                            <div key={meal.idMeal} className="col-md-4">
                                <div className="card mb-4">
                                    <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                                    <div className="card-body">
                                        <h5 className="card-title">{meal.strMeal}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center mt-4">Aucune recette trouvée</p>
            )}
        </div>
    );
};

export default SearchMeals;
