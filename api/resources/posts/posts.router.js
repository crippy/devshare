// Location bio etc
// Authentication username, password
const express = require('express');
const router = express.Router();
const controller = require('./posts.controller');

// @route   GET api/posts/test
// @desc    Test post route
// @access  Public
router.get('/test', (req, res) => {
  res.json({ id: 1, name: 'Posts Works' });
});

// @route   GET api/posts
// @desc    posts
// @access  Public
router.get('/', controller.getPosts);

// @route   GET api/posts/:id
// @desc    Posts by :id
// @access  Public
router.get('/:id', controller.getPost);

// @route   DELETE api/posts/:id
// @desc    Delete by :id
// @access  Private
router.delete('/:id', controller.deletePost);

// @route   POST api/posts/:id/like
// @desc    POST like / unline a post
// @access  Private
router.post('/:id/like', controller.postLike);

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/', controller.postData);

module.exports = router;