const Publicacion = require('../models/publicacionModel');

async function getPublicaciones() {
    return await Publicacion.getAll();
}

async function crearPublicacion(usuario_id, titulo, contenido, imagen, video) {
    return await Publicacion.crearPublicacion(usuario_id, titulo, contenido, imagen, video);
    
}

module.exports = {
    getPublicaciones,
    crearPublicacion
};