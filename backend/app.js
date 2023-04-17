const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();

//importation des fichiers
const userRoutes = require('./routes/users');
const takesRoutes = require('./routes/takes');

const app = express();

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://huso95400:tfcOJV5001MYqUrr@cluster0.qu32yq0.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 }); 

 app.use(express.json());
 app.use(express.urlencoded({ extended: true}));
 

 app.use('/api/auth', userRoutes);
 app.use('/api/takes', takesRoutes)

module.exports = app;