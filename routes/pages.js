const express = require('express');
const { homePage, addPostPage, notFound } = require('../controllers/pages');

const router = express.Router();

//@route GET /
//desc home page
//Public
router.get('/', homePage);


//@route GET /add
//desc add post page
//Public
router.get('/add', addPostPage);


//@route GET /add
//desc add post page
//Public
router.get('/*', notFound);

module.exports = router;