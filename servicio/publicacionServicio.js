const Publicacion = require('../models/publicacionModel');

async function getPublicaciones() {
    return await Publicacion.getAll();
}

// Función para obtener imagen por ID
async function getImagenPorId(id) {
    return await Publicacion.obtenerImagenPorId(id);
}

// Función para obtener video por ID
async function getVideoPorId(id) {
    return await Publicacion.obtenerVideoPorId(id);
}

async function crearPublicacion(usuario_id, titulo, contenido, imagen, video) {
    return await Publicacion.crearPublicacion(usuario_id, titulo, contenido, imagen, video);
    
}

async function agregarComentario(req, res) {
    try {
        const { usuario_id, comentario } = req.body;
        const publicacion_id = req.params.id;

        console.log('Datos recibidos:', { usuario_id, publicacion_id, comentario });

        const nuevoComentario = await publicacionesService.agregarComentario({
            usuario_id,
            publicacion_id,
            comentario,
        });

        res.status(201).json({ message: 'Comentario agregado', comentario: nuevoComentario });
    } catch (error) {
        console.error('Error al agregar comentario:', error);
        res.status(500).json({ message: 'Error al agregar comentario', error: error.message });
    }
}

module.exports = {
    getPublicaciones,
    crearPublicacion,
    getImagenPorId,
    getVideoPorId,
    agregarComentario
};