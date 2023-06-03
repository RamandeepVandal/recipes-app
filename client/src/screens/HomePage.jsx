import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import { Header } from "../components/Header";

export const HomePage = () => {
  const [recipes, setRecipes] = useState([{}]);

  // get the data from the db
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/recipes");
      const data = await res.json();
      setRecipes(data);
    };
    fetchData();
  }, []);

  // navigation
  const navigate = useNavigate();
  const handleClick = (data) => navigate("/recipe", { state: { data } });

  return (
    <>
      <Header />
      <h1 className="container text-center mt-1">Your Recipes</h1>
      <section className="container d-flex justify-content-center align-items-center">
        {recipes.map((recipe) => {
          return (
            <div className="card m-5 p-5">
              <h1>{recipe?.dishName}</h1>
              <button
                className="btn btn-dark btn-block"
                onClick={() => handleClick(recipe)}
              >
                View
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};
