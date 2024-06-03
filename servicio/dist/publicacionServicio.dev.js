"use strict";

var Publicacion = require('../models/publicacionModel');

function getPublicaciones() {
  return regeneratorRuntime.async(function getPublicaciones$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Publicacion.getAll());

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function crearPublicacion(usuario_id, titulo, contenido, imagen, video) {
  return regeneratorRuntime.async(function crearPublicacion$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Publicacion.crearPublicacion(usuario_id, titulo, contenido, imagen, video));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

module.exports = {
  getPublicaciones: getPublicaciones,
  crearPublicacion: crearPublicacion
};
//# sourceMappingURL=publicacionServicio.dev.js.map
