const express = require('express');
const router = express.Router();
const postsService = require('./service');

router.get('/posts', postsService.posts);

module.exports = router;
