const express = require('express');
const router = express.Router();
const publicacionController = require('../controllers/publicacionController');
const perfilController = require('../controllers/perfilController');
const index = require('./index');
const registrar = require('./registrar');
const authenticate = require('./authenticate');

router.use('/', index);
router.use('/registrar', registrar);
router.use('/authenticate', authenticate);
router.get('/publicaciones', publicacionController.obtenerTodas);
router.post('/publicaciones', publicacionController.crearPublicacion);
router.post('/publicaciones/:id/like', publicacionController.agregarLike);
router.post('/publicaciones/:id/comentar', publicacionController.agregarComentario);

// Ruta para actualizar el perfil de un usuario
router.put('/perfil', perfilController.actualizarPerfil);
module.exports = router;