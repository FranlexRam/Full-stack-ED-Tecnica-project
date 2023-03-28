const app = require('./app');
const http = require('http');
const open = require('open');

const server = http.createServer(app);




server.listen(3003, () => {
    console.log('El servidor corre en el puerto 3003');
})