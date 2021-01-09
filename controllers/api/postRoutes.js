const router = require('express').Router();
const { Post, Comment } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
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


router.get('/project/:id', async (req, res) => {

});

router.post('/', (req, res) => {
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
