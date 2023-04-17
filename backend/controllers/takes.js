const Sauce = require('../models/TAKES');

//Créer (ajouter) une sauce
exports.createTakes = (req, res, next) => {
    const takesObject = req.body;
    delete takesObject._id;//envoi un id
    const takes =new Takes({//creation un nouvelle instant contenant tout les info
        ...sauceObject,//operateur sprite pour faire un copie (corps de la requette)
        likes:0,
        dislikes:0
    });
    sauce.save()//enregistre la nouvelle instance
    .then(() => res.status(201).json({ message : 'Objet enregistré avec succés !'}))
    .catch(error => res.status(400).json({error}));

};