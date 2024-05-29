// perfilModel.js
const conexion = require('../datebase/conexion');

const Perfil = {
    obtenerPerfil: (usuarioId, callback) => {
        conexion.query('SELECT * FROM perfiles WHERE usuario_id = ?', [usuarioId], callback);
    },
    actualizarPerfil: (usuarioId, nombre, imagen, callback) => {
        conexion.query(
            'INSERT INTO perfiles (usuario_id, nombre, imagen) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE nombre = ?, imagen = ?',
            [usuarioId, nombre, imagen, nombre, imagen],
            callback
        );
    }
};

module.exports = Perfil;
