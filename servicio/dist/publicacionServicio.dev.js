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
} // Función para obtener imagen por ID


function getImagenPorId(id) {
  return regeneratorRuntime.async(function getImagenPorId$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Publicacion.obtenerImagenPorId(id));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
} // Función para obtener video por ID


function getVideoPorId(id) {
  return regeneratorRuntime.async(function getVideoPorId$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Publicacion.obtenerVideoPorId(id));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function crearPublicacion(usuario_id, titulo, contenido, imagen, video) {
  return regeneratorRuntime.async(function crearPublicacion$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Publicacion.crearPublicacion(usuario_id, titulo, contenido, imagen, video));

        case 2:
          return _context4.abrupt("return", _context4.sent);

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}

module.exports = {
  getPublicaciones: getPublicaciones,
  crearPublicacion: crearPublicacion,
  getImagenPorId: getImagenPorId,
  getVideoPorId: getVideoPorId
};
//# sourceMappingURL=publicacionServicio.dev.js.map
