const mongoose = require ('mongoose');

//methode schema pour cree un schema des donnees qui contient les champs pour chaque sauces
const takesSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainIngredient: { type: String, required: true },
    imageUrl: { type: String, required: false },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: Array, required: true },
    usersDisliked: { type: Array, required: true },
});

module.exports = mongoose.model('Takes', takesSchema);
