// perfilService.js
const Perfil = require('../models/perfilModel');

const obtenerPerfil = async (usuarioId) => {
    return new Promise((resolve, reject) => {
        Perfil.obtenerPerfil(usuarioId, (err, resultado) => {
            if (err) {
                reject('Error al obtener el perfil');
            } else {
                resolve(resultado[0]);
            }
        });
    });
};

const actualizarPerfil = async (usuarioId, nombre, imagen) => {
    return new Promise((resolve, reject) => {
        Perfil.actualizarPerfil(usuarioId, nombre, imagen, (err, resultado) => {
            if (err) {
                reject('Error al actualizar el perfil');
            } else {
                resolve('Perfil actualizado correctamente');
            }
        });
    });
};

module.exports = {
    obtenerPerfil,
    actualizarPerfil
};
