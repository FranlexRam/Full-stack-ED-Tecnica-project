require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');

(async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI_DEV);
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log(error);
        console.log('Connected to mongoDB');
    }
})();


// Backend routes

//Frontend routes

app.use('/' , express.static(path.resolve('views', 'home')));
app.use('/login' , express.static(path.resolve('views', 'login')));


module.exports = app;