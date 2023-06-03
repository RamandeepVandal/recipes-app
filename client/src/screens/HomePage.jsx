import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

// components
import { Header } from "../components/Header";
import { set } from "mongoose";

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

  // delete recipe
  const deleteRecipe = async (id) => {
    try {
      await Axios.delete(`http://localhost:5000/recipes/${id}`);
      // show the change dynamically
      setRecipes(recipes => recipes.filter(item => item?._id !== id));

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <h1 className="container text-center mt-1">Your Recipes</h1>
      <section className="container d-flex justify-content-center align-items-center flex-wrap">
        {recipes.map((recipe) => {
          return (
            <div className="card m-5 p-5 h-100" style={{ flexBasis: 25 + "%" }}>
              <h6 className="d-flex justify-content-center align-items-center">
                {recipe?.dishName}{" "}
                <button className="btn" onClick={() => deleteRecipe(recipe?._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </button>
              </h6>
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
