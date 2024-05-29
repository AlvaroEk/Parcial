const express = require('express');
const router = express.Router();
const { crearPublicacion, obtenerTodas } = require('../controllers/publicacionController');

// Rutas
router.post('/crear', crearPublicacion);
router.get('/obtener-todas', obtenerTodas);

module.exports = router;