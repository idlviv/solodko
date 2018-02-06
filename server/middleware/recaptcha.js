var rp = require('request-promise-native');
const config = require('../config');
const log = require('../config/winston')(module);

module.exports = function(req, res, next) {

  if (req.body.recaptcha === '' ||
    req.body.recaptcha === null ||
    req.body.recaptcha === undefined) {
    res.json({success: false, message: 'Recaptcha error'})
  }

  const recaptchaSecret = config.get('RECAPTCHA_SECRET');
  const recaptchaURL = `https://www.google.com/recaptcha/api/siteverify?secret=
  ${recaptchaSecret}&response=${req.body.recaptcha}&remoteip=${req.connection.remoteAddress}`;

  rp(recaptchaURL)
    .then(result => {
      console.log('result', result);
      if (result.success) {
        next();
      } else {
        res.json({success: false, message: 'Recaptcha error'});
      }})
    .catch(error => res.json({success: false, message: 'Recaptcha error', data: error}));

    // console.log('req.body.recaptcha', req.body.recaptcha);
    // request('http://www.google.com', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   // console.log('body:', body); // Print the HTML for the Google homepage.
    // });

};
