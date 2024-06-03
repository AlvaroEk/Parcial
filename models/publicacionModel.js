const { obtenerConexion } = require('../datebase/conexion');

async function getAll() {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM publicaciones');
        return results;
    } catch (error) {
        console.error('Error al seleccionar publicaciones', error);
        throw error;
    } finally {
        conexion.release();
    }
}

// Crear una nueva publicación
async function crearPublicacion(usuario_id, titulo, contenido, imagen, video) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query(
            'INSERT INTO publicaciones (usuario_id, titulo, contenido, imagen, video) VALUES (?, ?, ?, ?, ?)',
            [usuario_id, titulo, contenido, imagen, video]
        );
    } catch (error) {
        console.error('Error al crear la publicación:', error);
        throw error;
    } finally {
        conexion.release();
    }
}


module.exports = {
    getAll,
    crearPublicacion
};