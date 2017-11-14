const config = require('../config');
let jwt = require('jsonwebtoken');
let UserModel = require('../models/userModel');
const log = require('../config/winston')(module);
let nodemailer = require('nodemailer');

module.exports.userRole = function(req, res, next) {
  // UserModel.getUserById(req.user._doc._id)
  //   .then((user) => {
  //     log.info('role', user.role);
  //     return res.status(200).json(user.role);
  //   })
  //   .catch((error) => res.json(error));
  const user = req.user._doc;
  log.info('role', user.role);
  res.status(200).json(user.role);
};

// зареєструвати в базі нового користувача
module.exports.userRegistration = function(req, res, next) {
  let newUser = new UserModel({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    isEmailConfirmed: false
  });
  // повертає обєкт (success..)
  log.verbose('user Controller- newUser', newUser);
  UserModel.addUser(newUser)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};
module.exports.sendVerificationEmail = function(req, res, next) {
  const user = req.user._doc;
  // console.log('user.email', user.email);
  // console.log('user.isEmailConfirmed', user.isEmailConfirmed);

  if (!user.isEmailConfirmed) {
    const TOKEN = createTokenForEmailVerification(user);
    // !!!!! full_url = req.protocol + '://' + req.get('host') + req.originalUrl;
    const URL = req.protocol + '://' + req.get('host') + '/api/receiveverificationemail?token=' + TOKEN;
    // console.log('sendVerificationEmail-token', TOKEN);
    // console.log('sendVerificationEmail-URL', URL);
    mailTransport(URL, user.email);
    res.json('ok');
  } else {
    console.log('email already confirmed');
    res.json('email already confirmed');
  }
};

module.exports.receiveVerificationEmail = function(req, res, next) {
  const USER = req.user._doc;
  UserModel.getUserById(USER._id)
    .then((user) => {
      if (user.email === USER.email) {
        UserModel.updateUser({'_id': user._id}, {$set: {'isEmailConfirmed': true}})
          .then(result => {
            console.log('перевірка користувача оновлена в бд', result.success);
            // res.status(200).json('Пошту перевірено');
            res.redirect(req.protocol + '://' + req.get('host') + '/profile');
          })
          .catch(result => console.log('коритсувач не оновлений в бд', result.success));
      } else {
      }
    })
    .catch((error) => {
      console.log('перевірка користувача якась помилка))');
    });
  // res.status(200).json('Пошту не перевірено');

};

function mailTransport(URL, email) {
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
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}

module.exports.sendMail = function(req, res, next) {

  let transporter = nodemailer.createTransport({
    service:  'Mailgun',
    auth: {
      user: config.get('MAIL_USER'),
      pass: config.get('MAIL_PASS')
    }
  });
  let mailOptions = {
    from: 'Solodko <postmaster@sandbox2a37a392c4934639b9e08ca32ece3bcd.mailgun.org>',
    to: '0008.ua@gmail.com',
    subject: 'Please verify account',
    text: 'test message form mailgun',
    html: '<b>test message form mailgun</b>'
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('email send error', error);
      return res.status(error);
    }
    console.log('Message sent: %s', info.messageId);
    return res.status(200).send(info.messageId);
  });
};

module.exports.sendTestMail = function(req, res, next) {

  nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass  // generated ethereal password
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
      to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }

      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  });
};

createToken = function(user) {
  return jwt.sign(
    {
      sub: {
        _id: user._id,
        role: user.role
      },
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7), // 60 секунд * 60 хвилин = 1 година * 24 год * 7 днів
    },
    config.get('MONGOOSE_SECRET')
    // {expiresIn: 604800} //1 week
  );
};

createTokenForEmailVerification = function(user) {
  return jwt.sign(
    {
      sub: {
        _id: user._id,
        email: user.email
      },
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), //1 day
    },
    config.get('JWT_SECRET_EMAIL')
    // {expiresIn: 604800} //1 week
  );
};

//створити токен при вході користувача і передати в фронт
module.exports.userAuthentication = function(req, res, next) {
  log.verbose('router - LocalStrategy - authenticated');

  const user = req.user._doc;
  // в payload записую тільки id юзера, можу добавити будь-які дані
  const TOKEN = 'JWT ' + createToken(user);
  // const cookieOptions = {
  //   httpOnly: true,
  //   secure: true,
  //   maxAge: 3600,
  // };
  //
  // res.cookie('token', 'JWT ' + TOKEN, cookieOptions);

  // в фронт при вході даю всі дані, крім пароля
  res.status(200).json({
    success: true, token: TOKEN,
    user: {
      _id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      role: user.role,
    }
  });
};

module.exports.userProfile = function(req, res, next) {
  //паспорт після валідації передає юзера в полі req.user._doc
  //.json сам знайде _doc і виділить користувача тому можна передати просто req.user,
  // якщо хочу передати всього користівача. Але даю все, крім пароля
  const user = req.user._doc;
  res.status(200).json({
    _id: user._id,
    username: user.username,
    name: user.name,
    surname: user.surname,
    email: user.email,
    role: user.role,
    isEmailConfirmed: user.isEmailConfirmed
  });
};
