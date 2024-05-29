const { obtenerConexion } = require('../datebase/conexion');

const obtenerTodas = async (callback) => {
    let conexion;
    try {
        conexion = await obtenerConexion();
        const [results] = await conexion.query(`
            SELECT p.*, COUNT(c.id) AS comentarios, IFNULL(l.likes, 0) AS likes 
            FROM publicaciones p 
            LEFT JOIN comentarios c ON p.id = c.publicacion_id 
            LEFT JOIN (SELECT publicacion_id, COUNT(*) AS likes FROM likes GROUP BY publicacion_id) l 
            ON p.id = l.publicacion_id 
            GROUP BY p.id
        `);
        callback(null, results);
    } catch (err) {
        console.error("Error al obtener publicaciones en el modelo:", err);
        callback(err);
    } finally {
        if (conexion) conexion.release();
    }
};

const crearPublicacion = async (publicacion, callback) => {
    let conexion;
    try {
        conexion = await obtenerConexion();
        const [result] = await conexion.query('INSERT INTO publicaciones SET ?', publicacion);
        callback(null, result);
    } catch (err) {
        console.error("Error al crear publicación en el modelo:", err);
        callback(err);
    } finally {
        if (conexion) conexion.release();
    }
};

const agregarLike = async (id, usuario_id, callback) => {
    let conexion;
    try {
        conexion = await obtenerConexion();
        const [result] = await conexion.query('INSERT INTO likes (publicacion_id, usuario_id) VALUES (?, ?)', [id, usuario_id]);
        callback(null, result);
    } catch (err) {
        console.error("Error al agregar like en el modelo:", err);
        callback(err);
    } finally {
        if (conexion) conexion.release();
    }
};

const agregarComentario = async (comentario, callback) => {
    let conexion;
    try {
        conexion = await obtenerConexion();
        const [result] = await conexion.query('INSERT INTO comentarios SET ?', comentario);
        callback(null, result);
    } catch (err) {
        console.error("Error al agregar comentario en el modelo:", err);
        callback(err);
    } finally {
        if (conexion) conexion.release();
    }
};

module.exports = { obtenerTodas, crearPublicacion, agregarLike, agregarComentario };
