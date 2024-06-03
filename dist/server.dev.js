"use strict";

var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var app = express(); // Middleware para manejar los datos del formulario

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser()); // Configuración del motor de plantillas Pug

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Rutas de autenticación y otras rutas

var router = require('./routes/routes');

app.use('/', router); // Rutas de publicaciones

var publicacionRoutes = require('./routes/publicacion');

app.use('/publicaciones', function (req, res, next) {
  console.log('Solicitud recibida en /publicaciones');
  next();
}, publicacionRoutes);
console.log('Publicacion routes loaded'); // Ruta de prueba

app.get('/test', function (req, res) {
  res.json({
    message: 'Ruta de prueba funcionando'
  });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Servidor corriendo en el puerto ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
