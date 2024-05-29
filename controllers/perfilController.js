// perfilController.js
const perfilService = require('../servicio/perfilServicio');

const obtenerPerfil = async (req, res) => {
    try {
        const usuarioId = req.user.id; // Suponiendo que tienes middleware para manejar la autenticación
        const perfil = await perfilService.obtenerPerfil(usuarioId);
        res.json(perfil);
    } catch (error) {
        res.status(500).json({ error });
    }
};

const actualizarPerfil = async (req, res) => {
    try {
        const usuarioId = req.user.id; // Suponiendo que tienes middleware para manejar la autenticación
        const { nombre } = req.body;
        const imagen = req.file ? req.file.filename : null;

        const message = await perfilService.actualizarPerfil(usuarioId, nombre, imagen);
        res.json({ message });
    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = {
    obtenerPerfil,
    actualizarPerfil
};
