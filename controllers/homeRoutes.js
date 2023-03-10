const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
            model: Comment,
            // attributes: ['content'],
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        }
      ],
    });

    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

    res.render('homepage', { 
      blogPosts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogpost/:id', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
            model: Comment,
            // attributes: ['content'],
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        }
      ],
    });

    const blogpost = blogPostData.get({ plain: true });
    const blogPostId = req.params.id

    res.render('blogpost', {
      ...blogpost,
      blogPostId,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
