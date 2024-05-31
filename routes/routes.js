const express = require('express');
const router = express.Router();

const index = require('./index');

router.use('/', index)


const usuariosRoute = require('./usuariosRoute');

router.use('/usuarios', usuariosRoute);

module.exports = router;
