"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('../datebase/conexion'),
    obtenerConexion = _require.obtenerConexion;

function getAll() {
  var conexion, _ref, _ref2, results;

  return regeneratorRuntime.async(function getAll$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(obtenerConexion());

        case 2:
          conexion = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(conexion.query('SELECT * FROM publicaciones'));

        case 6:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          results = _ref2[0];
          return _context.abrupt("return", results);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](3);
          console.error('Error al seleccionar publicaciones', _context.t0);
          throw _context.t0;

        case 16:
          _context.prev = 16;
          conexion.release();
          return _context.finish(16);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 12, 16, 19]]);
} // Crear una nueva publicación


function crearPublicacion(usuario_id, titulo, contenido, imagen, video) {
  var conexion;
  return regeneratorRuntime.async(function crearPublicacion$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(obtenerConexion());

        case 2:
          conexion = _context2.sent;
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(conexion.query('INSERT INTO publicaciones (usuario_id, titulo, contenido, imagen, video) VALUES (?, ?, ?, ?, ?)', [usuario_id, titulo, contenido, imagen, video]));

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](3);
          console.error('Error al crear la publicación:', _context2.t0);
          throw _context2.t0;

        case 12:
          _context2.prev = 12;
          conexion.release();
          return _context2.finish(12);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[3, 8, 12, 15]]);
}

module.exports = {
  getAll: getAll,
  crearPublicacion: crearPublicacion
};
//# sourceMappingURL=publicacionModel.dev.js.map
