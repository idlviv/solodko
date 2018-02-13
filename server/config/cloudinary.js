const cloudinary = require('cloudinary');
const config = require('../config');

cloudinary.config({
  cloud_name: config.get('CLODINARY_NAME'),
  api_key: config.get('CLODINARY_KEY'),
  api_secret: config.get('CLODINARY_SECRET')
});

module.exports = cloudinary;
