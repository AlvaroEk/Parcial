const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/conversations', chatController.createConversation);
router.post('/messages', chatController.sendMessage);
router.get('/conversations/:conversationId/messages', chatController.getMessages);

// Nueva ruta getConversations
router.get('/conversations', chatController.getConversations);

module.exports = router;
