const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log("Requête est bien reçu")
    next();
});

app.use((req, res, next) =>{
    res.status(201);
    next();
})

app.use ((req, res, next) =>{
    res.json({message: 'la requête a bien ete reçue !'});
    next();
});

app.use ((req, res, next) =>{
    console.log('response envoyée avec succès ! ');
});

module.exports = app;
