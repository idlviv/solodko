let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let BlogsController = require('../controllers/blogsController');
const log = require('../config/winston')(module);

const config = require('../config');

router.post('/addblog',
  // passport.authenticate('jwt', {session: false}),

  BlogsController.addBlog
);

module.exports = router;
