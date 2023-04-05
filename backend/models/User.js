const mongoose = require('mongoose'); //importation mongoose methode mongoose validator
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({// methode schema mongoose
    email: { type: String, required: true, unique: true},//email unique
    password: { type: String, required: true}
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);//export model user et corespond ce qu'on met dans le schema 



