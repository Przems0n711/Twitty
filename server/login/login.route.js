const express = require('express');
const router = express.Router();
const loginService = require('./service');

router.post('/user/login', loginService.login);
router.post('/admin/login', loginService.login);


module.exports = router;
