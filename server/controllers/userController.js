const config = require('../config');
let jwt = require('jsonwebtoken');
let UserModel = require('../models/userModel');

module.exports.userRegistration = function(req, res, next) {
  let newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  // повертає обєкт (success..)
  console.log('user Controller- newUser', newUser);
  UserModel.addUser(newUser)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
};

module.exports.userAuthentication = function(req, res, next) {
  console.log('router - LocalStrategy - authenticated');
  const user = req.body.username;
  // payload що передаю в jwt це юзер, можу добавити будь-які дані
  const token = jwt.sign(
    {
      sub: user,
      iat: new Date().getTime(),
      exp: new Date().getTime() + 604800 // or setDate(new Date().getDate() + 7) //7 days
    },
    config.get('MONGOOSE_SECRET')
    // {expiresIn: 604800} //1 week
  );
  console.log(user);
  res.status(200).json({
    success: true, token: 'JWT ' + token, user: {
      _id: user._id,
      username: user.username,
      name: user.name,
      email: user.email
    }
  });
};

module.exports.userProfile = function(req, res, next) {
  console.log(req.user);
  res.json({user: req.user});
};
