const config = require('../config');
const cloudinary = require('cloudinary');
// let UploadModel = require('../models/uploadModel');

module.exports.changeAvatar = function(req, res, next) {

  if (!req.body) {
    return res.json([]);
  }

  cloudinary.config({
    cloud_name: config.get('CLODINARY_NAME'),
    api_key: config.get('CLODINARY_KEY'),
    api_secret: config.get('CLODINARY_SECRET')
  });
  console.log('req.body.file', req.files.file);
  cloudinary.uploader.upload(req.files.file, function(result) {
    console.log(result);
    return res.json(result);
  });

  // let updateOptions = req.body.updateOptions;
  // BlogsModel.updateMongo(updateOptions)
  //   .then(result => res.json(result))
  //   .catch(error => res.json(error));
};
