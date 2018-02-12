let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let UploadController = require('../controllers/uploadController');
const log = require('../config/winston')(module);
const config = require('../config');



router.post(
  '/change-avatar',
  // passport.authenticate('jwt.user.manager.admin', {session: false}),
  UploadController.changeAvatar
);

module.exports = router;
