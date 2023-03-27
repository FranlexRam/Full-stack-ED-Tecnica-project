const usersRouter = require('express').Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

usersRouter.post('/', async (request,response) =>{
    const { name, email, password } = request.body;
    
    if(!name || !email || !password) {
        return response.status(400).json({ error: 'Todos los espacios son requeridos' });
    }

    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    const newUser = new User({
        name,
        email,
        passwordHash,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

});

module.exports = usersRouter;