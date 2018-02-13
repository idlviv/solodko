const config = require('../config');
const cloudinary = require('../config/cloudinary');
// let UploadModel = require('../models/uploadModel');
let UserModel = require('../models/userModel');
const formidable = require('formidable');

module.exports.changeAvatar = function(req, res, next) {

  let form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {

    console.log('files', files);
    console.log('fields', fields.user_id);


    cloudinary.v2.uploader.upload(
      files.file.path,

        {width: 180, height: 180, crop: 'limit'},
        // {overlay: "my_watermark", flags: "relative", width: 0.5}
      function(error, result) {
        if (error) {
          return res.json({success: false, message: 'Помилка завантаження аватара', error});
        }

        console.log('result', result);
        // res.json(util.inspect({fields: fields, files: files}));

        let updateOptions = {};
        updateOptions['query'] = {_id: fields.user_id};
        updateOptions['update'] = {$set: {
          avatar: 'https://res.cloudinary.com/hegjiwupj/image/upload/' + result.public_id
        }};
        console.log('updateOptions', updateOptions);
        UserModel.updateMongo(updateOptions)
          .then(result => res.json(result))
          .catch(error => res.json(error));
      });
  });

  // let updateOptions = req.body.updateOptions;
  // BlogsModel.updateMongo(updateOptions)
  //   .then(result => res.json(result))
  //   .catch(error => res.json(error));
};
