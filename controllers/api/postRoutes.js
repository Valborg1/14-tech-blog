const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await User.findAll({
      include: [
        {
          model: Post
        },
        {
          model: Comment
        }
      ]
  })
    res.json(postData)
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
    include: [
      {
        model: Comment
      }
    ]
  })
    res.json(postData)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create(req.body);

    req.session.save(() => {
      req.session.logged_in = true;

    res.status(200).json(postData)
  });
 } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
