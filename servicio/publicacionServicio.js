const Publicacion = require('../models/publicacionModel');

async function getPublicaciones() {
    return await Publicacion.getAll();
}

async function crearPublicacion(usuario_id, contenido, tipo, imagen, video) {
    return await Publicacion.crearPublicacion(usuario_id, contenido, tipo, imagen, video);
}

module.exports = {
    getPublicaciones,
    crearPublicacion
};