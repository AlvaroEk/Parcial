const publicacionService = require('../servicio/publicacionServicio');
const multer = require('multer');
const path = require('path');

// Configuración de multer para guardar archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

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
    upload.fields([{ name: 'imagen', maxCount: 1 }, { name: 'video', maxCount: 1 }])(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const { usuario_id, tipo, contenido } = req.body;
        let imagen = null;
        let video = null;

        if (req.files['imagen']) {
            imagen = req.files['imagen'][0].path;
        }

        if (req.files['video']) {
            video = req.files['video'][0].path;
        }

        publicacionService.crearPublicacion({ usuario_id, tipo, contenido, imagen, video }, (err, result) => {
            if (err) {
                console.error("Error al crear publicación:", err);
                return res.status(500).json({ error: "Error al crear publicación" });
            }
            console.log("Publicación creada correctamente:", result);
            res.status(201).json(result);
        });
    });
};

const agregarLike = (req, res) => {
    const { id } = req.params;
    const { usuario_id } = req.body;
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
