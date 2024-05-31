const { obtenerConexion } = require('../datebase/conexion');

// Obtener todas las publicaciones
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
async function crearPublicacion(usuario_id, titulo, contenido, tipo, imagen, video) {
    const conexion = await obtenerConexion();
    try {
        const [rows] = await conexion.query(
            'SELECT * FROM publicaciones WHERE usuario_id = ? AND titulo = ?',
            [usuario_id, titulo]
        );

        if (rows.length > 0) {
            throw new Error('La publicación ya existe.');
        } else {
            await conexion.query(
                'INSERT INTO publicaciones (usuario_id, titulo, contenido, tipo, imagen, video) VALUES (?, ?, ?, ?, ?, ?)',
                [usuario_id, titulo, contenido, tipo, imagen, video]
            );
        }
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
