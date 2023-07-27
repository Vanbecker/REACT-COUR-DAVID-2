
import React, { useState, useEffect } from 'react';


const AllCategory = () => {


    const [categories, setCategories] = useState([]);

    // Utilisation du hook useEffect pour effectuer une requête au chargement du composant.
    // Cette requête récupérera les catégories à partir de l'API et mettra à jour l'état "categories".
    useEffect(() => {
        // Définition de la fonction fetchCategories pour effectuer la requête asynchrone.
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


    return (
        <div className="container mt-4">
            <h2 className="text-center">Liste des catégories :</h2>

            <ul className="list-group">

                {categories.map((category) => (


                    <li key={category.idCategory} className="list-group-item">{category.strCategory}</li>
                ))}
            </ul>
        </div>
    );
};


export default AllCategory;

