const PublicacionServicio = require('../servicio/publicacionServicio');

// Obtener todas las publicaciones
async function getPublicacionesPublicas(req, res) {
    try {
        const publicaciones = await PublicacionServicio.getPublicaciones();
        const usuarioId = req.isAuthenticated() ? req.user.id : null;

        res.render('publicacion', { publicaciones: publicaciones, usuarioId: usuarioId });
    } catch (error) {
        console.error('Error al obtener publicaciones:', error);
        res.status(500).send('Error al obtener publicaciones');
    }
}

// Crear una nueva publicación
async function crearPublicacion(req, res) {
    const { usuario_id, titulo, contenido, tipo, imagen, video } = req.body;
    try {
        await PublicacionServicio.crearPublicacion(usuario_id, titulo, contenido, tipo, imagen, video);
        res.redirect('/publicacion');
    } catch (error) {
        console.error('Error al crear publicación:', error);
        if (error.message === 'La publicación ya existe.') {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Error al crear publicación' });
        }
    }
}

module.exports = {
    getPublicacionesPublicas,
    crearPublicacion
};
