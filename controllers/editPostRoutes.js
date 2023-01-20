const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
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

    const commentData = await Comment.findAll({
      where: {
        blog_post_id: req.params.id
      }
    })

    const comments = commentData.map((comment) => comment.get({ plain: true }));

    const blogPost = blogPostData.get({ plain: true });
    const blogPostId = req.params.id
    
    res.render('editpost', { 
      blogPost,
      comments,
      blogPostId,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
