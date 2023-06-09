require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require ('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');

(async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI_DEV);
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log(error);
        console.log('Connected to mongoDB');
    }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Frontend routes
app.use('/' , express.static(path.resolve('views', 'home')));
app.use('/components' , express.static(path.resolve('views', 'components')));
app.use('/login' , express.static(path.resolve('views', 'login')));
app.use('/registro' , express.static(path.resolve('views', 'signup')));
app.use('/images' , express.static(path.resolve('img')));
app.use('/verify/:token' , express.static(path.resolve('views', 'verify')));

app.use(morgan('tiny'));

//Backend routes
app.use('/api/users', usersRouter);


module.exports = app;