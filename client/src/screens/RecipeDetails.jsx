import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// component
import { Header } from "../components/Header";

export const RecipeDetails = ({ recipe }) => {
  // location
  const location = useLocation();

  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <div>
      <Header />
      <div className="container">
      <button className="btn btn-dark mt-2" onClick={handleClick}>Back</button>
      <section className="card mt-2" style={{border: 'none'}}>
        <h1>{location?.state?.data?.dishName}</h1>
        <h3>Ingredients</h3>
        <p className="foo">{location?.state?.data?.ingredients}</p>
        <h3>Instructions</h3>
        <p className="foo">{location?.state?.data?.instructions}</p>
      </section>
      </div>
    </div>
  );
};
