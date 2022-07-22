const express = require('express');
const { homePage, addPostPage, notFound, postsPage } = require('../controllers/pages');

const router = express.Router();

//@route GET /
//desc home page
//Public
router.get('/', homePage);


//@route GET /add
//desc add post page
//Public
router.get('/add', addPostPage);


//@route GET /posts
//desc read posts
//Public
router.get('/posts', postsPage);


//@route GET /*
//desc not found page
//Public
router.get('/*', notFound);

module.exports = router;