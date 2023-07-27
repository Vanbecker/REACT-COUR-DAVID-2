import React, { useState, useEffect } from 'react';

const AllCategory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error('Pas de réponse:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = async (category) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`);
            if (!response.ok) {
                throw new Error('Réponse ok');
            }
            const data = await response.json();
            setRecipes(data.meals || []);
            setSelectedCategory(category.strCategory);
        } catch (error) {
            console.error('Pas de réponse:', error);
            setRecipes([]);
            setSelectedCategory(null);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Liste des catégories :</h2>
            <div className="row justify-content-center">
                {categories.map((category) => (
                    <div key={category.idCategory} className="col-md-3 d-flex justify-content-center">
                        <button
                            className={`btn btn-primary btn-block mb-3 ${selectedCategory === category.strCategory ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.strCategory}
                        </button>
                    </div>
                ))}
            </div>
            {recipes.length > 0 ? (
                <div className="row justify-content-center mt-4">
                    {recipes.map((recipe) => (
                        <div key={recipe.idMeal} className="col-md-3 mb-4">
                            <div className="card">
                                <img src={recipe.strMealThumb} className="card-img-top" alt={recipe.strMeal} />
                                <div className="card-body">
                                    <h5 className="card-title">{recipe.strMeal}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                selectedCategory && <p className="text-center mt-4">Aucune recette trouvée pour la catégorie {selectedCategory}</p>
            )}
        </div>
    );
};

export default AllCategory;
