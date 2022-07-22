const express = require('express');
const { homePage, addPostPage, notFound, postsPage, getPost, deletePost } = require('../controllers/pages');

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


//@route GET /posts
//desc read posts
//Public
router.get('/post/:id', getPost);


//@route DELETE /posts
//desc read posts
//Public
router.delete('/post/:id', deletePost);


//@route GET /*
//desc not found page
//Public
router.get('/*', notFound);

module.exports = router;