const express = require('express');
const router = express.Router();
const userService = require('./service/users');

router.post('/users', userService.addUser);
router.get('/users', userService.getUsers);
router.get('/users/emails', userService.getEmails);
router.post('/users/remove', userService.removeUser);

module.exports = router;
