const express = require('express');
const router = express.Router();

const index = require('./index');
const usuariosRoute = require('./usuariosRoute');
const publicacionRoutes = require('./publicacion'); 

router.use('/', index);
router.use('/usuarios', usuariosRoute);
router.use('/publicacion', publicacionRoutes);


module.exports = router;
