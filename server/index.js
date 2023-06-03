const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
// db
const connectDB = require('./config/connectDB');
// PORT
const PORT = 5000 || process.env.PORT;

// connect to db
connectDB();

// init app
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// use the routes
app.use('/recipes', require('./routes/recipeRoutes'));

// check if app is running
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})