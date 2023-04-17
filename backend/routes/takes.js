const express = require('express');
const router = express.Router();

const takesCtrl = require('../controllers/takes');
const auth = require('../middleware/auth');

router.post('/', auth, takesCtrl.createSauces);


module.exports = router;
