const express = require('express');
const router = express.Router();
const publicacionController = require('../controllers/publicacionController');

// Rutas
router.post('/crearNuevo', publicacionController.crearPublicacion); // Crear una nueva publicación
router.get('/publicacionesPublicas', publicacionController.getPublicacionesPublicas); // Obtener todas las publicaciones públicas
router.get('/publicaciones', publicacionController.getPublicaciones); // Obtener todas las publicaciones

module.exports = router;