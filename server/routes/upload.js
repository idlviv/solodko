const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const UploadController = require('../controllers/uploadController');
const log = require('../config/winston')(module);
const config = require('../config');

router.post(
  '/change-avatar',
  passport.authenticate('jwt.user.manager.admin', {session: false}),
  UploadController.changeAvatar
);

module.exports = router;
