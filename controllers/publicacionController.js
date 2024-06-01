const PublicacionServicio = require('../servicio/publicacionServicio');

// Obtener todas las publicaciones
async function getPublicaciones(req, res) {
    try {
        const publicaciones = await PublicacionServicio.getPublicaciones();
        console.log('Publicaciones obtenidas:', publicaciones);
        res.json({ title: 'Página Principal', publicaciones: publicaciones || [] });
    } catch (error) {
        console.error('Error al obtener publicaciones:', error);
        res.status(500).json({ error: 'Error al obtener publicaciones' });
    }
}

// Obtener todas las publicaciones públicas
async function getPublicacionesPublicas(req, res) {
    try {
        const publicaciones = await PublicacionServicio.getPublicaciones();
        console.log('Publicaciones públicas obtenidas:', publicaciones);
        res.json(publicaciones);
    } catch (error) {
        console.error('Error al obtener publicaciones públicas:', error.message);
        res.status(500).json({ error: 'Error al obtener publicaciones' });
    }
}

// Crear una nueva publicación
async function crearPublicacion(req, res) {
    const { usuario_id, titulo, contenido, tipo, imagen, video } = req.body;
    try {
        console.log('Datos de la nueva publicación:', req.body);
        await PublicacionServicio.crearPublicacion(usuario_id, titulo, contenido, tipo, imagen, video);
        console.log('Publicación creada exitosamente');
        res.status(201).json({ message: 'Publicación creada' });
    } catch (error) {
        console.error('Error al crear publicación:', error);
        res.status(500).json({ error: 'Error al crear publicación' });
    }
}

module.exports = {
    getPublicacionesPublicas,
    getPublicaciones,
    crearPublicacion
};