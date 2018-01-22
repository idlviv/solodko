let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let BlogsController = require('../controllers/blogsController');
const log = require('../config/winston')(module);

const config = require('../config');

router.post(
  '/add-comment',
  passport.authenticate('jwt.user.manager.admin', {session: false}),
  BlogsController.addComment
);

router.post(
  '/add-blog',
  passport.authenticate('jwt.manager.admin', {session: false}),
  BlogsController.addBlog
);

router.get(
  '/get-blogs',
  BlogsController.getBlogs
);

router.get(
  '/get-queried-blogs',
  BlogsController.getQueriedBlogs
);

router.get(
  '/find-blogs',
  BlogsController.findBlogs
);

router.put(
  '/edit-blog',
  passport.authenticate('jwt.manager.admin', {session: false}),
  BlogsController.editBlog
);

router.delete(
  '/delete-blog/:_id',
  passport.authenticate('jwt.manager.admin', {session: false}),
  BlogsController.deleteBlog
);

module.exports = router;
