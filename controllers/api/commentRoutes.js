const router = require('express').Router();
const { Comment } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({})
    res.json(commentData)
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/project/:id', async (req, res) => {

});

// // Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {

});


module.exports = router;
