const express = require('express');
const router = express.Router();
const Posts = require('../../Models/posts');

router.post('/', (req, res) => { res.send('My Post Request') });

module.exports = router;