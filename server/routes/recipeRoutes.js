const express = require('express');
const { getRecipes, setRecipes, deleteRecipes } = require('../controllers/recipeController');

// create a router
const router = express.Router();

// routes for get and post recipes
router.route('/').get(getRecipes).post(setRecipes);

// route for deleting recipes
router.route('/:id').delete(deleteRecipes);

module.exports = router;
