const express = require('express');
const { addPost } = require('../controllers/pages');

const router = express.Router();

//@route POST
//desc add post route
//public
router.post('/add', addPost);

module.exports = router;