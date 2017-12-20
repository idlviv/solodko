const config = require('../config');
let BlogsModel = require('../models/blogsModel');
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

module.exports.addBlog = function(req, res, next) {
  if (!req.body.title) {
    res.json({success: false, message: 'Немає заголовка'});
  } else if (!req.body.body) {
    res.json({success: false, message: 'Немає тексту повідомлення'});
  } else if (!req.body.createdBy) {
    res.json({success: false, message: 'Немає автора'});
  } else {
    const newBlog = new BlogsModel({
      title: req.body.title,
      body: req.body.body,
      createdBy: req.body.createdBy,
    });

    BlogsModel.addBlog(newBlog)
      .then(result => res.json(result))
      .catch(result => res.json(result));
  }

};
