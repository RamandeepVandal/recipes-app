const express = require('express');
const { getRecipes, setRecipes, deleteRecipes, editRecipes } = require('../controllers/recipeController');

// create a router
const router = express.Router();

// routes for get and post recipes
router.route('/').get(getRecipes).post(setRecipes);

// route for deleting recipes
router.route('/:id').delete(deleteRecipes).put(editRecipes);

module.exports = router;
