const config = require('../config');
const cloudinary = require('../config/cloudinary');
// let UploadModel = require('../models/uploadModel');
const formidable = require('formidable');

module.exports.changeAvatar = function(req, res, next) {

  // cloudinary.config({
  //   cloud_name: config.get('CLODINARY_NAME'),
  //   api_key: config.get('CLODINARY_KEY'),
  //   api_secret: config.get('CLODINARY_SECRET')
  // });

  let form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {

    console.log('files', files);

    // res.json(util.inspect({fields: fields, files: files}));

    cloudinary.v2.uploader.upload(
      files.file.path,

        {width: 180, height: 180, crop: 'limit'},
        // {overlay: "my_watermark", flags: "relative", width: 0.5}
      function(err, result) {
      console.log('err', err);
      console.log('result', result);
      return res.json(result);
    });
  });

  // let updateOptions = req.body.updateOptions;
  // BlogsModel.updateMongo(updateOptions)
  //   .then(result => res.json(result))
  //   .catch(error => res.json(error));
};
