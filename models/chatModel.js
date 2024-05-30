const conexion = require('../datebase/conexion').obtenerConexion;

exports.createConversation = async (data) => {
    const connection = await conexion();
    try {
        const { nombre, tipo } = data;
        const [result] = await connection.query('INSERT INTO conversaciones (nombre, tipo) VALUES (?, ?)', [nombre, tipo]);
        console.log('createConversation result:', result);
        return { id: result.insertId, nombre, tipo };
    } finally {
        connection.release();
    }
};

exports.sendMessage = async (data) => {
    const connection = await conexion();
    try {
        const { conversacion_id, remitente_id, contenido } = data;
        const [result] = await connection.query('INSERT INTO mensajes_chat (conversacion_id, remitente_id, contenido) VALUES (?, ?, ?)', [conversacion_id, remitente_id, contenido]);
        console.log('sendMessage result:', result);
        return { id: result.insertId, conversacion_id, remitente_id, contenido };
    } finally {
        connection.release();
    }
};

exports.getMessages = async (conversationId) => {
    const connection = await conexion();
    try {
        const [messages] = await connection.query('SELECT * FROM mensajes_chat WHERE conversacion_id = ?', [conversationId]);
        console.log('getMessages result:', messages);
        return messages;
    } finally {
        connection.release();
    }
};

exports.getConversations = async () => {
    const connection = await conexion();
    try {
        const [conversations] = await connection.query('SELECT * FROM conversaciones');
        console.log('getConversations result:', conversations);
        return conversations;
    } finally {
        connection.release();
    }
};
