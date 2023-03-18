const express = require('express');
const  mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://huso213:olCjq4LITNISwk0A@cluster0.efqkxkj.mongodb.net/FullstackhotTakes?retryWrites=true&w=majority',
{
    useNewUrlParser :true,
    useUnifiedTopology: true
})
.then(() => console.log('connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) =>{
    console.log("Requête est bien reçu");
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
