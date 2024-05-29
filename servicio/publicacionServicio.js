const Publicacion = require('../models/publicacionModel');

const obtenerTodas = (callback) => {
    Publicacion.obtenerTodas((err, publicaciones) => {
        if (err) {
            console.error("Error al obtener publicaciones en el servicio:", err);
            return callback(err);
        }
        callback(null, publicaciones);
    });
};

const crearPublicacion = (publicacion, callback) => {
    Publicacion.crearPublicacion(publicacion, (err, result) => {
        if (err) {
            console.error("Error al crear publicación en el servicio:", err);
            return callback(err);
        }
        callback(null, result);
    });
};

const agregarLike = (id, usuario_id, callback) => {
    Publicacion.agregarLike(id, usuario_id, (err, result) => {
        if (err) {
            console.error("Error al agregar like en el servicio:", err);
            return callback(err);
        }
        callback(null, result);
    });
};

const agregarComentario = (comentario, callback) => {
    Publicacion.agregarComentario(comentario, (err, result) => {
        if (err) {
            console.error("Error al agregar comentario en el servicio:", err);
            return callback(err);
        }
        callback(null, result);
    });
};

module.exports = { obtenerTodas, crearPublicacion, agregarLike, agregarComentario };
