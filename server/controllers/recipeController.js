const mongoose = require('mongoose');
const express = require('express');
const Recipes = require('../models/recipeModel');

// GET -> show all the recipes
const getRecipes = async (req, res) => {
    const data = await Recipes.find({});

    // if no recipes exist
    if (!data) {
        await res.status(400).send('No recipes exist.');
    }

    res.status(200).json(data);
}

// POST -> create recipes
const setRecipes = async (req, res) => {
    const recipe = await req.body;
    const newRecipe = new Recipes(recipe);
    await newRecipe.save();

    res.status(200).json(newRecipe);
}

// DELETE -> delete recipes
const deleteRecipes = async (req, res) => {
    const id = await req.params.id;

    // check if recipe exists
    if (!id) {
        res.status(400).send('Recipe does not exist.');
    }

    await Recipes.findByIdAndDelete(id).exec();

    res.status(200).send('Recipe deleted.')
}

// PUT -> edit recipes
const editRecipes = async (req, res) => {
    const id = await req.params.id;
    const newRecipe = await req.body;

    // check if recipe exists
    if (!id) {
        res.status(400).send('Recipe does not exist.');
    }

    await Recipes.findByIdAndUpdate(id, newRecipe);
    res.status(200).send('Recipe edited.');
}

module.exports = { getRecipes, setRecipes, deleteRecipes, editRecipes };