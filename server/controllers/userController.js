const config = require('../config');
let jwt = require('jsonwebtoken');
let UserModel = require('../models/userModel');
const log = require('../config/winston')(module);

module.exports.userRole = function(req, res, next) {
  const user = req.user._doc;
  console.log('role');
  log.info(user.role);
  res.status(200).json(user.role);
};

// зареєструвати в базі нового користувача
module.exports.userRegistration = function(req, res, next) {
  let newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  // повертає обєкт (success..)
  log.verbose('user Controller- newUser', newUser);
  UserModel.addUser(newUser)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};

createToken = function(user) {
  return jwt.sign(
    {
      sub: {
        _id: user._id,
      },
      iat: new Date().getTime(),
      exp: new Date().getTime() + 604800 // or setDate(new Date().getDate() + 7) //7 days
    },
    config.get('MONGOOSE_SECRET')
    // {expiresIn: 604800} //1 week
  );
};

//створити токен при вході користувача і передати в фронт
module.exports.userAuthentication = function(req, res, next) {
  log.verbose('router - LocalStrategy - authenticated');

  const user = req.user._doc;
  // в payload записую тільки id юзера, можу добавити будь-які дані
  const TOKEN = createToken(user);
  // в фронт при вході даю всі дані, крім пароля
  res.cookie('SESSIONID', TOKEN, {httpOnly: true, secure: true});
  res.status(200).json({
    success: true, token: 'JWT ' + TOKEN,
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
  res.status(200).json({user: {
    _id: user._id,
    username: user.username,
    name: user.name,
    email: user.email
  }});
};
