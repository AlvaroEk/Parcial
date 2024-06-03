"use strict";

var express = require('express');

var router = express.Router();

var publicacionController = require('../controllers/publicacionController');

var multer = require('multer'); // Configuración de `multer` para manejar archivos en memoria


var storage = multer.memoryStorage();
var upload = multer({
  storage: storage
});
router.get('/createNewPost', function (req, res) {
  res.render('createNewPost', {
    title: 'Crear Publicación'
  });
});
router.get('/getAllPost', function (req, res) {
  console.log('Solicitud GET recibida en /getAllPost');
  publicacionController.getPublicaciones(req, res);
});
router.post('/createNewPost', upload.fields([{
  name: 'imagen'
}, {
  name: 'video'
}]), function (req, res, next) {
  console.log('Solicitud POST recibida en /createNewPost');
  next();
}, function (req, res) {
  console.log('Pasando a controlador crearPublicacion');
  publicacionController.crearPublicacion(req, res);
});
module.exports = router;
//# sourceMappingURL=publicacion.dev.js.map
