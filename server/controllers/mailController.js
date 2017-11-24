const config = require('../config');
const log = require('../config/winston')(module);
let nodemailer = require('nodemailer');

module.exports.sendMail = function(URL, email) {
  let transporter = nodemailer.createTransport({
    service:  'Mailgun',
    auth: {
      user: config.get('MAIL_USER'),
      pass: config.get('MAIL_PASS')
    }
  });
  let mailOptions = {
    from: 'Solodko <postmaster@sandbox2a37a392c4934639b9e08ca32ece3bcd.mailgun.org>',
    to: email,
    subject: 'Please verify account',
    text: 'Будь ласка, перейдіть за посиланням ', URL,
    html: '<b>Будь ласка, перейдіть за посиланням </b>' + URL
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(info);
      }
    });
  });
};
