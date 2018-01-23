const config = require('../config');
let jwt = require('jsonwebtoken');
let UserModel = require('../models/userModel');
const log = require('../config/winston')(module);
let nodemailer = require('nodemailer');
const mailController = require('./mailController');
//
// module.exports.userRole = function(req, res, next) {
//   // UserModel.getUserById(req.user._doc._id)
//   //   .then((user) => {
//   //     log.info('role', user.role);
//   //     return res.status(200).json(user.role);
//   //   })
//   //   .catch((error) => res.json(error));
//   const user = req.user._doc;
//   log.info('role', user.role);
//   res.status(200).json(user.role);
// };

// зареєструвати в базі нового користувача
module.exports.userRegistration = function(req, res, next) {
  let newUser = new UserModel({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email.toLocaleLowerCase(),
    username: req.body.username.toLocaleLowerCase(),
    password: req.body.password,
    role: req.body.role,
    isEmailConfirmed: false
  });
  // повертає обєкт (success..)
  UserModel.addUser(newUser)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
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
            res.redirect(req.protocol + '://' + req.get('host'));
          })
          .catch(error => res.json(error));
      } else {
      }
    })
    .catch((error) => {
      res.json(error);
    });
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
    mailController.sendMail(URL, user.email)
      .then((info) => res.status(200).json(info))
      .catch((error) => res.json(error));
  } else {
    res.json('email already confirmed');
  }
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

module.exports.getUsernameById = function(req, res, next) {
  UserModel.getUsernameById(req.params._id)
    .then(result =>  res.status(200).json(result))
    .catch(error => res.json(error));
};

module.exports.getUsersByIds = function(req, res, next) {
  console.log('req.query.searchQuery', req.query);
  if (!req.query.searchQuery) {
    return res.json([]);
  }
  let searchQuery = JSON.parse(req.query.searchQuery);
  UserModel.getUsersByIds(searchQuery)
    .then(result =>  res.status(200).json(result))
    .catch(error => res.json(error));
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
    isEmailConfirmed: user.isEmailConfirmed,
    avatar: user.avatar,
  });
};
