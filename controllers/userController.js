const usuariosService = require('../servicio/userService');
const autenticador = require('../middlewares/authMiddleware');

async function registrarUsuario(req, res) {
    const dataSegura = req.body.dataSegura;

    console.log('datasegura = ', dataSegura);
    try {
        let datos = autenticador.verificarDatos(dataSegura);
        console.log('datos = ', datos);
        const usuarioExistente = await verificarRegistro(datos.email);

        if (usuarioExistente) {
            res.status(409).send('El usuario ya está registrado');
        } else {  
            await usuariosService.registrar(datos.nombre, datos.usuario, datos.email, datos.password);
            res.status(201).send('Usuario registrado correctamente');
        }
    } catch (error) {
        console.error('Error al registrar usuario en la API:', error);
        res.status(500).send('Error interno del servidor');
    }
}


async function logearUsuario(req, res) {
    const { dataSegura } = req.body;
    try {
        let datos = autenticador.verificarDatos(dataSegura);
        const usuario = await verificarRegistro(datos.email);
        if (!usuario) {
            res.status(404).send('Usuario incorrecto');
        } else {
            let validPassword = await autenticador.comparePassword(datos.password, usuario.contraseña);
            if (!validPassword) {
                res.status(404).send('Contraseña incorrecta');
            } else {
                res.status(200).json(usuario);
            }
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).send('Error interno del servidor');
    }
}

async function obtenerUsuarioPorNombre(nombre) {
    try {
        const usuario = await usuariosService.obtenerPorNombre(nombre);
        return usuario;
    } catch (error) {
        console.error('Error al obtener usuario por nombre:', error);
        return error;
    }
}


async function verificarRegistro(email) {
    try {
        const usuarioExistente = await usuariosService.verificarRegister(email);
        console.log("usuarioExistente es =", usuarioExistente)
        return usuarioExistente;
    } catch (error) {
        console.error('Error al verificar registro:', error);
        return { status: 500, message: 'Error interno del servidor' };
    }
}


async function agregarComentario(req, res) {
    try {
        const { usuario_id, comentario } = req.body;
        const publicacion_id = req.params.id;

        const nuevoComentario = await publicacionesService.agregarComentario({
            usuario_id,
            publicacion_id,
            comentario,
        });

        res.status(201).json({ message: 'Comentario agregado', comentario: nuevoComentario });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar comentario', error });
    }
}

module.exports = {
    registrarUsuario,
    logearUsuario,
    obtenerUsuarioPorNombre,
    verificarRegistro,
    agregarComentario
};