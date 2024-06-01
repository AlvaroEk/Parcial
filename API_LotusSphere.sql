-- Creación de la base de datos llamada red_social
CREATE DATABASE IF NOT EXISTS red_social;
-- Usar esta base de datos
USE red_social;

-- TABLAS

-- Tabla para almacenar usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    contraseña VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS perfiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nombre VARCHAR(100),
    imagen VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS publicaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    tipo ENUM('texto', 'imagen', 'video', 'mixto') NOT NULL,
    contenido TEXT NOT NULL,
    imagen VARCHAR(255),
    video VARCHAR(255),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    publicacion_id INT NOT NULL,
    usuario_id INT NOT NULL,
    comentario TEXT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (publicacion_id) REFERENCES publicaciones(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS likes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    publicacion_id INT NOT NULL,
    usuario_id INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (publicacion_id) REFERENCES publicaciones(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla para almacenar conversaciones
CREATE TABLE IF NOT EXISTS conversaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    tipo ENUM('privada', 'grupo') NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para almacenar mensajes
CREATE TABLE IF NOT EXISTS mensajes_chat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conversacion_id INT NOT NULL,
    remitente_id INT NOT NULL,
    contenido TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversacion_id) REFERENCES conversaciones(id),
    FOREIGN KEY (remitente_id) REFERENCES usuarios(id)
);

-- Tabla para almacenar participantes en cada conversación
CREATE TABLE IF NOT EXISTS participantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conversacion_id INT NOT NULL,
    usuario_id INT NOT NULL,
    fecha_unido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversacion_id) REFERENCES conversaciones(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Consultas de prueba para verificar la estructura de las tablas nuevas
SELECT * FROM usuarios;
SELECT * FROM publicaciones;
SELECT * FROM conversaciones;
SELECT * FROM mensajes_chat;
SELECT * FROM participantes;


DROP DATABASE red_social;

