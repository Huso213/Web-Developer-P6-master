const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const helmet = require('helmet');
require('dotenv').config();


const userRoutes = require('./routes/users');

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://huso213:olCjq4LITNISwk0A@cluster0.efqkxkj.mongodb.net/FullstackhotTakes?retryWrites=true&w=majority',{
    useNewUrlParser :true,
    useUnifiedTopology: true
})
.then(() => console.log('connexion à MongoDB réussie !'))
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

module.exports = app;