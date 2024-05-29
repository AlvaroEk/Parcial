const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config(); // Asegúrate de que las variables de entorno se carguen

const perfilRouter = require('./usuarios/perfil.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const perfilController = require('./controllers/perfilController.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./usuarios/router.js');

// Integrar el router de perfil
app.use('/perfil', perfilRouter);

// Use the router
app.use('/', router);

// Define la ruta para actualizar el perfil del usuario
router.put('/perfil/usuarios/:id', upload.single('imagen'), perfilController.actualizarPerfil);

const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
