"use strict";

var PublicacionServicio = require('../servicio/publicacionServicio'); // Obtener todas las publicaciones


function getPublicaciones(req, res) {
  var publicaciones, publicacionesProcesadas;
  return regeneratorRuntime.async(function getPublicaciones$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('Solicitud recibida para obtener publicaciones');
          _context.next = 4;
          return regeneratorRuntime.awrap(PublicacionServicio.getPublicaciones({
            limite: 10
          }));

        case 4:
          publicaciones = _context.sent;
          console.log('Publicaciones obtenidas:', publicaciones);
          publicacionesProcesadas = publicaciones.map(function (pub) {
            return {
              id: pub.id,
              usuario_id: pub.usuario_id,
              titulo: pub.titulo,
              contenido: pub.contenido,
              imagen: pub.imagen ? "http://localhost:3000/publicaciones/imagen/".concat(pub.id) : null,
              video: pub.video ? "http://localhost:3000/publicaciones/video/".concat(pub.id) : null
            };
          });
          console.log('Publicaciones procesadas:', publicacionesProcesadas);
          res.setHeader('Content-Type', 'application/json');
          res.json({
            title: 'Página Principal',
            publicaciones: publicacionesProcesadas
          });
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.error('Error al obtener publicaciones:', _context.t0);
          res.status(500).json({
            error: 'Error al obtener publicaciones'
          });

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

function crearPublicacion(req, res) {
  var _req$body, usuario_id, titulo, contenido, imagen, video;

  return regeneratorRuntime.async(function crearPublicacion$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Llamada a crearPublicacion');
          _req$body = req.body, usuario_id = _req$body.usuario_id, titulo = _req$body.titulo, contenido = _req$body.contenido;
          imagen = req.files && req.files['imagen'] ? req.files['imagen'][0].buffer : null;
          video = req.files && req.files['video'] ? req.files['video'][0].buffer : null; // Log de depuración para los datos recibidos

          console.log('Datos de la nueva publicación:', {
            usuario_id: usuario_id,
            titulo: titulo,
            contenido: contenido,
            imagen: imagen ? 'Imagen recibida' : 'Sin imagen',
            video: video ? 'Video recibido' : 'Sin video'
          });
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(PublicacionServicio.crearPublicacion(usuario_id, titulo, contenido, imagen, video));

        case 8:
          console.log('Publicación creada exitosamente');
          res.status(201).json({
            message: 'Publicación creada exitosamente'
          });
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](5);
          console.error('Error al crear publicación:', _context2.t0);
          res.status(500).json({
            error: 'Error al crear publicación'
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 12]]);
}

module.exports = {
  getPublicaciones: getPublicaciones,
  crearPublicacion: crearPublicacion
};
//# sourceMappingURL=publicacionController.dev.js.map
