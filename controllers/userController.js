const userModel = require('../models/userModel');
const authMiddleWare = require('../middlewares/authMiddleware');

async function registrarUsuario(dataSegura) {
    console.log('dataSegura = ', dataSegura);
    console.log('dataSegura nombre, email, passwordHash = ', dataSegura.nombre, dataSegura.email, dataSegura.passwordHash);
    try {
        // Descifrar los datos seguros recibidos de la aplicación web
        const nombre = authMiddleWare.decryptData(dataSegura.nombre);
        const email = authMiddleWare.decryptData(dataSegura.email);
        const password_hash = authMiddleWare.decryptData(dataSegura.passwordHash);

        // Registrar al usuario en la base de datos utilizando el modelo
        await userModel.registrarUsuario(nombre, email, password_hash);
    } catch (error) {
        // Manejar cualquier error que ocurra
        console.error('Error al registrar usuario en la API:', error);
        throw error;
    }
}

async function verificarRegistro(email) {
    try {
        console.log('email', email)
        const usuarioExistente = await userModel.verificarUsuarioExistente(email);
        console.log('email y usuarioExistente', email, usuarioExistente);
        if (usuarioExistente) {
            return { status: 400, message: 'El usuario ya está registrado' };
        }
        return { status: 200, message: 'El usuario no está registrado' };
    } catch (error) {
        console.error('Error al verificar registro:', error);
        return { status: 500, message: 'Error interno del servidor' };
    }
}


module.exports = {
    registrarUsuario,
    verificarRegistro
};
