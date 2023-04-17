//protege les routes selectionnes et verifier que l'utilisateur est authentifié
const jwt = require ('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];//split pour récupérer tout après l'espace
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');//fontion verifie le token avec clé secret
        const userId = decodedToken.userId;//extraction id utilisateur

        if( req.body.userId && req.body.userId !== userId ){ //si la demande contien un ID utilisateur on compare a celui extrait du Token
        throw 'User ID non valable !';//erreur detecte
        }else{
        next();//sinon next
        } 
    }catch {
    res.status(401).json({ message: 'Requête non authentifiée !' });
    }
};

