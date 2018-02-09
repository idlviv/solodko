const rp = require('request-promise-native');
// const request = require('request');
const config = require('../config');

const log = require('../config/winston')(module);

module.exports = function(req, res, next) {
  if (req.body.recaptcha === '' ||
    req.body.recaptcha === null ||
    req.body.recaptcha === undefined) {
    return res.json({success: false, message: 'Recaptcha error'});
  }
  const recaptchaSecret = config.get('RECAPTCHA_SECRET');
  const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=
  ${recaptchaSecret}&response=${req.body.recaptcha}&remoteip=${req.connection.remoteAddress}`;


  rp(recaptchaURL)
    .then(result => {
      console.log('result', result);
      result = JSON.parse(result);
      if (result.success === true) {
        return next();
      } else {
        console.log('error');
        return res.json({success: false, message: 'Recaptcha error'});
      }})
    .catch(error => res.json({success: false, message: 'Recaptcha error', data: error}));

  // if (req.body.recaptcha === '' ||
  //   req.body.recaptcha === null ||
  //   req.body.recaptcha === undefined) {
  //   res.json({success: false, message: 'Recaptcha error'})
  // }
  //
  // const recaptchaSecret = config.get('RECAPTCHA_SECRET');
  // const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=
  // ${recaptchaSecret}&response=${req.body.recaptcha}&remoteip=${req.connection.remoteAddress}`;
  //
  // request(recaptchaURL, function(error, response, body) {
  //   // console.log('response', response);
  //   console.log('body', body);
  //   body = JSON.parse(body);
  //   if (error) {
  //     return res.json({success: false, message: 'Recaptcha error', data: error});
  //   }
  //   if (body.success === true) {
  //     return next();
  //   } else {
  //     console.log('error');
  //     return res.json({success: false, message: 'Recaptcha error'});
  //   }});
  //
  // // rp(recaptchaURL)
  //
  //   // .then(result => {
  //   //   result = JSON.parse(result);
  //   //   if (result.success === true) {
  //   //     return next();
  //   //   } else {
  //   //     console.log('error');
  //   //     return res.json({success: false, message: 'Recaptcha error'});
  //   //   }})
  //   // .catch(error => res.json({success: false, message: 'Recaptcha error', data: error}));
};
