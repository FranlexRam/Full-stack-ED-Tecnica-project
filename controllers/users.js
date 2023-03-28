const usersRouter = require('express').Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

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
    const token = jwt.sign({ id: savedUser.id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1d'
    });
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // generated ethereal user
          pass: process.env.EMAIL_PASS, // generated ethereal password
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: savedUser.email, // list of receivers
        subject: 'Verificacion de usuario. APP Franlex Eduardo', // Subject line
        html: `<a href=""></a>`, // html body
      });

});

module.exports = usersRouter;