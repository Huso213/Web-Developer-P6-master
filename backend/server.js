const http = require('http');

const server = http.createServer((_req, res) => {
    res.end('Je suis la reponse du serveur Node.js !')
});

server.listen(process.env.PORT || 3000);
 