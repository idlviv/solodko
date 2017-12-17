let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let BlogController = require('../controllers/blogController');
const log = require('../config/winston')(module);

const config = require('../config');

// router.post('/postblog',
//   passport.authenticate('jwt.manager.admin', {session: false}),
//   BlogController.postBlog
// );
