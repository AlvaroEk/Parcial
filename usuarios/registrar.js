const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userController');

router.post('/', async (req, res) => {
    const dataSegura = req.body.dataSegura;
    console.log('datasegura = ', dataSegura);
  
    try {
      const resultado = await userControllers.registrarUsuario(dataSegura);
      console.log('registro = ', resultado);
      console.log('dataSegura = ', dataSegura);
      res.status(201).json({ mensaje: 'Registro exitoso', data: resultado });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error en el registro', error: error.message });
    }
  });
  
  module.exports = router;
  ;
