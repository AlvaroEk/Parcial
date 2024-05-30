const chatService = require('../servicio/chatService');

exports.createConversation = async (req, res) => {
    try {
        const conversation = await chatService.createConversation(req.body);
        res.status(201).json(conversation);
    } catch (error) {
        console.error('Error creating conversation:', error); // Logging
        res.status(500).json({ message: error.message });
    }
};

exports.sendMessage = async (req, res) => {
    try {
        const message = await chatService.sendMessage(req.body);
        res.status(201).json(message);
    } catch (error) {
        console.error('Error sending message:', error); // Logging
        res.status(500).json({ message: error.message });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await chatService.getMessages(req.params.conversationId);
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error getting messages:', error); // Logging
        res.status(500).json({ message: error.message });
    }
};

exports.getConversations = async (req, res) => {
    try {
        const conversations = await chatService.getConversations();
        res.status(200).json(conversations);
    } catch (error) {
        console.error('Error getting conversations:', error); // Logging
        res.status(500).json({ message: error.message });
    }
};
