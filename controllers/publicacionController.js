const publicacionService = require('../servicio/publicacionServicio');

const obtenerTodas = (req, res) => {
    console.log("Recibiendo solicitud para obtener todas las publicaciones");
    publicacionService.obtenerTodas((err, publicaciones) => {
        if (err) {
            console.error("Error al obtener publicaciones:", err);
            return res.status(500).json({ error: "Error al obtener publicaciones" });
        }
        console.log("Publicaciones obtenidas correctamente:", publicaciones);
        res.json(publicaciones);
    });
};

const crearPublicacion = (req, res) => {
    const { usuario_id, tipo, contenido } = req.body;
    console.log("Datos recibidos para crear publicación:", req.body);
    publicacionService.crearPublicacion({ usuario_id, tipo, contenido }, (err, result) => {
        if (err) {
            console.error("Error al crear publicación:", err);
            return res.status(500).json({ error: "Error al crear publicación" });
        }
        console.log("Publicación creada correctamente:", result);
        res.status(201).json(result);
    });
};

const agregarLike = (req, res) => {
    const { id } = req.params;
    const { usuario_id } = req.body; // Suponiendo que el ID del usuario se pasa en el cuerpo de la solicitud
    publicacionService.agregarLike(id, usuario_id, (err, result) => {
        if (err) {
            console.error("Error al agregar like:", err);
            return res.status(500).json({ error: "Error al agregar like" });
        }
        res.status(200).json(result);
    });
};

const agregarComentario = (req, res) => {
    const { publicacion_id, usuario_id, comentario } = req.body;
    publicacionService.agregarComentario({ publicacion_id, usuario_id, comentario }, (err, result) => {
        if (err) {
            console.error("Error al agregar comentario:", err);
            return res.status(500).json({ error: "Error al agregar comentario" });
        }
        res.status(201).json(result);
    });
};

module.exports = { obtenerTodas, crearPublicacion, agregarLike, agregarComentario };
