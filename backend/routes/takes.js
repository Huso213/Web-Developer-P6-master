const express = require('express');
const router = express.Router();

const takesCtrl = require('../controllers/hottakes.js');

router.post('/', takesCtrl.createTakes);

module.exports = router;
