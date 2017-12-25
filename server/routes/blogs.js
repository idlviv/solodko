let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let BlogsController = require('../controllers/blogsController');
const log = require('../config/winston')(module);

const config = require('../config');

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

router.put(
  '/edit-blog',
  BlogsController.editBlog
);

router.delete(
  '/delete-blog/:_id',
  BlogsController.deleteBlog
);

module.exports = router;
