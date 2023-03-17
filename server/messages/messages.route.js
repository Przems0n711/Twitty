const express = require('express');
const router = express.Router();
const messageService = require('./service');

router.post('/messages', messageService.addMessage);
router.post('/getMessages', messageService.getMessages);
router.post('/getMessagesSent', messageService.getMessagesSent);
router.post('/removeMessage', messageService.removeMessage);
router.post('/markAsRead', messageService.markAsRead);

module.exports = router;
