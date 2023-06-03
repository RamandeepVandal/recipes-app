const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipes', recipeSchema);