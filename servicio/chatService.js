const chatModel = require('../models/chatModel');

exports.createConversation = async (data) => {
    return await chatModel.createConversation(data);
};

exports.sendMessage = async (data) => {
    return await chatModel.sendMessage(data);
};

exports.getMessages = async (conversationId) => {
    return await chatModel.getMessages(conversationId);
};

// Nueva función getConversations
exports.getConversations = async () => {
    return await chatModel.getConversations();
};
