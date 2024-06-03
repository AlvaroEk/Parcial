const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware para manejar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Configuración del motor de plantillas Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Rutas de autenticación y otras rutas
const router = require('./routes/routes');
app.use('/', router);

// Rutas de publicaciones
const publicacionRoutes = require('./routes/publicacion');
app.use('/publicaciones', (req, res, next) => {
    console.log('Solicitud recibida en /publicaciones');
    next();
}, publicacionRoutes);

console.log('Publicacion routes loaded');

// Ruta de prueba
app.get('/test', (req, res) => {
  res.json({ message: 'Ruta de prueba funcionando' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
