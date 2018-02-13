const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const UploadController = require('../controllers/uploadController');
const log = require('../config/winston')(module);
const config = require('../config');

// const multer = require('multer'); // v1.0.5
// const upload = multer(); // for parsing multipart/form-data

const path = require('path');
const formidable = require('formidable');
const fs = require('fs');
util = require('util');

router.post(
  '/change-avatar',
  // passport.authenticate('jwt.user.manager.admin', {session: false}),
  UploadController.changeAvatar
);

router.post('/upload',
  // passport.authenticate('jwt.user.manager.admin', {session: false}),
  // upload.single('file'),

  function(req, res, next) {

  // let form = new formidable.IncomingForm();
  //
  //   form.parse(req, function(err, fields, files) {
  //     // res.writeHead(200, {'content-type': 'text/plain'});
  //     // res.write('received upload:\n\n');
  //
  //     console.log('files', files);
  //     res.json(util.inspect({fields: fields, files: files}));
  //
  //   });

    console.log('req.body', req.body);
    console.log('req.file', req.file);
    console.log('req.files', req.files);
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
