const express = require('express');
const router = express.Router();
const publicacionController = require('../controllers/publicacionController');

router.get('/', publicacionController.getPublicaciones);
router.post('/', publicacionController.crearPublicacion);

module.exports = router;
