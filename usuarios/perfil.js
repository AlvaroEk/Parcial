// perfilRouter.js
const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

router.get('/', perfilController.obtenerPerfil);
router.put('/', perfilController.actualizarPerfil);

module.exports = router;
