let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');

let UserModel = require('../models/userModel');
const config = require('../config');

// реєстрація і повернення результату в фронт
router.post('/register',
  passport.authenticate('jwt', {session: false}),
  function(req, res, next) {
  let newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  // повертає обєкт (success..)
  UserModel.addUser(newUser)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

router.post('/authenticate', function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  UserModel.getUserByUsername(username)
    .then((user) => {

      if (!user) {
        return res.json({success: false, msg: 'User not found'});
      }
      UserModel.comparePassword(password, user.password)
        .then((isMatch) => {
          if (isMatch) {
            const token = jwt.sign(user, config.get('MONGOOSE_SECRET'), {
              expiresIn: 604800 //1 week
            });
            res.json({
              success: true, token: 'JWT ' + token, user: {
                _id: user._id, username: user.username,
                name: user.name, email: user.email
              }
            });
          } else {
            return res.json({success: false, msg: 'Wrong password'});
          }
        })
        .catch((error) => {
          throw error;
        });
    })
  .catch((error) => {
    throw error;
  });
});

// роутер отримує хедер з токеном від auth.service (front)
// passport.authenticate робить запит до passport -> config/passport
// на основі токена config/passport витягує юзера і якщо такий є
// передає його як req.user в колбек, далі віддає його в фронт
// якщо ні, то далі не пускає - 401 Unauthorized
router.get(
  '/profile', passport.authenticate('jwt', {session: false}),
  (req, res, next) => {
    res.json({user: req.user});
  });

// router.get('/validate', function(req, res, next) {
//   res.json({user: req.user});
// });

module.exports = router;
