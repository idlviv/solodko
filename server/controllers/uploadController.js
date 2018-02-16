const config = require('../config');
const cloudinary = require('../config/cloudinary');
// let UploadModel = require('../models/uploadModel');
let UserModel = require('../models/userModel');
const formidable = require('formidable');
util = require('util');

module.exports.changeAvatar = function(req, res, next) {

  let form = new formidable.IncomingForm();

  // req.user._doc._id is ObjectId?
  let _idFromPassport = req.user._doc._id + '';
  let roleFromPassport = req.user._doc.role;

  form.parse(req, function(err, fields, files) {

    let _idFromFrontend = fields.user_id;
    // console.log('files', files);
    // console.log('fields', fields.user_id);

    if (_idFromFrontend === _idFromPassport) {
      doChangeAvatar(_idFromPassport);
    } else if (roleFromPassport === 'Admin' || roleFromPassport === 'Manager') {
      doChangeAvatar(_idFromFrontend);
    }

    function doChangeAvatar(_id) {
      cloudinary.v2.uploader.upload(
        files.file.path,

        { public_id: 'avatars/avatar' + _id,
          // invalidate: true,
          width: 180, height: 180, crop: 'fill' },
        // {overlay: "my_watermark", flags: "relative", width: 0.5}
        function(error, result) {
          if (error) {
            return res.json({success: false, message: 'Помилка завантаження аватара', error});
          }

          console.log('result', result);
          // res.json(util.inspect({fields: fields, files: files}));

          let updateOptions = {};
          updateOptions['query'] = {_id: _id};
          updateOptions['update'] = {$set: {
            avatar: result.secure_url,
            // avatar: 'https://res.cloudinary.com/hegjiwupj/image/upload/' + result.public_id
          }};
          console.log('updateOptions', updateOptions);
          UserModel.updateMongo(updateOptions)
            .then(result => res.json(result))
            .catch(error => res.json(error));
        });
    }

  });

  // let updateOptions = req.body.updateOptions;
  // BlogsModel.updateMongo(updateOptions)
  //   .then(result => res.json(result))
  //   .catch(error => res.json(error));
};
