const http = require('http');
const { type } = require('os');

const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10); //parsent la valeur du nombre

    if(isNaN(port)) {
        return val;//retourne la valuer
    }

    if(port >= 0) {
        return port;
    }

    return false;//si aucun des valeur n'est valide ce faux
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);//app utilise le port

const errorHandler =error => {
    if(error.syscall !== 'listen') {
        throw error;
    }//recherche les erreur

    const address = server.address();
    const bind = typeof address === 'string'?'pipe' +address:'port:'+port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const server = http.createServer(app);

server.on('error', errorHandler);//Gere les cas de different erreur possible
server.on('listening',() => {
    const address = server.address();//ecouteur d'evenement pour indiquer sur quel port le serveur est execute
    const bind = typeof address === 'string' ? 'pipe' + address: 'port' + port;
    console.log('Serveur en ecoute sur le ' + bind);//inque le no port ecoute
});

server.listen(port);
