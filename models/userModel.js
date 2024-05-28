const { obtenerConexion } = require('../datebase/conexion');

async function registrarUsuario(nombre, email, password_hash) {
    try {
        const conexion = await obtenerConexion();
        await conexion.query('INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)', [nombre, email, password_hash]);
        console.log('Usuario insertado correctamente');
    } catch (error) {
        console.error('Error al insertar usuario:', error);
        throw error;
    }
}

async function verificarUsuarioExistente(email) {
    try {
        const conexion = await obtenerConexion();
        console.log('Consultando usuario con email:', email);
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        console.log('Resultados de la consulta:', results);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por email:', error);
        throw error;
    }
}

async function obtenerPorId(id) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return results[0];
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        throw error;
    }
}

module.exports = {
    registrarUsuario,
    verificarUsuarioExistente,
    obtenerPorId,
};