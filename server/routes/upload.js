let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let UploadController = require('../controllers/uploadController');
const log = require('../config/winston')(module);
const config = require('../config');


var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

router.post(
  '/change-avatar',
  // passport.authenticate('jwt.user.manager.admin', {session: false}),
  UploadController.changeAvatar
);

router.post('/upload',
  // passport.authenticate('jwt.user.manager.admin', {session: false}),

  function(req, res) {
    console.log('req.body', req.body);
    console.log('req.file', req.file);
    console.log('req.files', req.files);
    // console.log('req.headers', req.headers);
    res.json('success');

    // create an incoming form object
  // var form = new formidable.IncomingForm();

  // // specify that we want to allow the user to upload multiple files in a single request
  // form.multiples = true;
  //
  // // store all uploads in the /uploads directory
  // form.uploadDir = path.join(__dirname, '/uploads');
  //
  // // every time a file has been uploaded successfully,
  // // rename it to it's orignal name
  // form.on('file', function(field, file) {
  //   fs.rename(file.path, path.join(form.uploadDir, file.name));
  // });
  //
  // // log any errors that occur
  // form.on('error', function(err) {
  //   console.log('An error has occured: \n' + err);
  // });
  //
  // // once all the files have been uploaded, send a response to the client
  // form.on('end', function() {
  //   res.end('success');
  // });
  // console.log('headers', req.headers);
  // // parse the incoming request containing the form data
  // form.parse(req, function(err, fields, files) {
  //   console.log('err', err);
  //   console.log('fields', fields);
  //   console.log('files', files);
  //   res.json('success');
  // });

});

module.exports = router;
