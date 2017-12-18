const config = require('../config');
let jwt = require('jsonwebtoken');
let BlogModel = require('../models/blogsModel');
const log = require('../config/winston')(module);

// module.exports.postBlog = function(req, res, next) {
//   // let newUser = new UserModel({
//   //   name: req.body.name,
//   //   surname: req.body.surname,
//   //   email: req.body.email.toLocaleLowerCase(),
//   //   username: req.body.username.toLocaleLowerCase(),
//   //   password: req.body.password,
//   //   role: req.body.role,
//   //   isEmailConfirmed: false
//   // });
//   // // повертає обєкт (success..)
//   // UserModel.addUser(newUser)
//   //   .then((result) => res.json(result))
//   //   .catch((error) => res.json(error));
// };

module.exports.newBlog = function(req, res, next) {
  res.json('new blog');
};
