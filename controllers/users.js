const usersRouter = require('express').Router();

usersRouter.post('/', async (request,response) =>{
    console.log(request.body);
    // const { name, email, password } = request.body;
    // console.log(name, email, password);
});

module.exports = usersRouter;