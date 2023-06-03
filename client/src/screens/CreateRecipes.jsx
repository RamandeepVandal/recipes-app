import React, { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import Axios from "axios";

// components
import { Header } from "../components/Header";

export const CreateRecipes = () => {
  // form inputs
  const [dishName, setDishName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  // showToast
  const [showToast, setShowToast] = useState(false);

  // get rid of toast or show the toast
  const toggleShowToast = () => setShowToast(true);
  const closeToast = () => setShowToast(false);
  
  // onSubmit
  const onSubmit = async (e) => {
    e.preventDefault();

    // add new line tag to every new line in text to store in db
    const modifiedIngredients = ingredients.replace(/\n\n\n/g, "#NEWLINE#");
    const modifiedInstructions = instructions.replace(/\n\n\n/g, "#NEWLINE#");

    // POST the user input into the recipe-app db
    try {
      await Axios.post("http://localhost:5000/recipes", {
        dishName: dishName,
        ingredients: modifiedIngredients,
        instructions: modifiedInstructions,
      });
      setToast(true);
    } catch (error) {
      console.log(error);
    }

    // reset the states
    setDishName("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div>
      <Header />

      <section className="container d-flex justify-content-center align-items-center flex-column m-5">
      <Toast className="mb-2" show={showToast} onClose={closeToast}>
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Recipe Created!</Toast.Body>
        </Toast>

        <h1>Create Recipes</h1>

        <div className="d-flex flex-column card p-5">
          <form onSubmit={onSubmit}>
            <div className="input-group m-3">
              <label className="me-4 form-label" htmlFor="dishName">
                Dish Name
              </label>
              <input
                type="text"
                id="dishName"
                className="form-control"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
              />
            </div>
            <div className="input-group m-3">
              <label className="me-4 form-label" htmlFor="ingredients">
                Ingredients
              </label>
              <textarea
                name="ingredients"
                id="ingredients"
                cols="60"
                rows="10"
                className="form-control"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              ></textarea>
            </div>
            <div className="input-group m-3">
              <label className="me-4 form-label" htmlFor="instruction">
                Instructions
              </label>
              <textarea
                name="instruction"
                id="instruction"
                cols="60"
                rows="10"
                className="form-control"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              ></textarea>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button className="btn btn-dark btn-block btn-lg" type="submit" onClick={toggleShowToast}>
                Create
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
