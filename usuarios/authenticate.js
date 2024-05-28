// En tus rutas (routes/usuarioRoutes.js)
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', async (req, res) => {
  const { email } = req.body;
    console.log('datos recibido:', email);
  
    try {
      const resultado = await userController.verificarRegistro( email );
      console.log('registro = ', resultado);
      console.log('dataSegura = ', email);
      res.status(201).json(resultado);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error en la verificacion', error: error.message });
    }
  });


module.exports = router;