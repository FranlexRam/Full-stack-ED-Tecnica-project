const app = require('./app');
const http = require('http');
const open = require('open');

const server = http.createServer(app);




server.listen(3003, () => {
    const { PAGE_URL } = require('./config.js');

    console.log(PAGE_URL);
    console.log('El servidor corre en el puerto 3003');
})