let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let UserController = require('../controllers/userController');
const log = require('../config/winston')(module);

const config = require('../config');

router.get('/role',
  passport.authenticate('jwt', {session: false}),
  UserController.userRole
  );

// реєстрація і повернення результату в фронт
router.post('/register',
  // passport.authenticate('jwt', {session: false}),
  UserController.userRegistration
  );

router.post('/authenticate',
  passport.authenticate('local.signin', {session: false}),
  UserController.userAuthentication
);

// роутер отримує хедер з токеном від auth.service (front)
// passport.authenticate робить запит до passport -> config/passport
// на основі токена config/passport витягує юзера і якщо такий є
// передає його як req.user в колбек, далі віддає його в фронт
// якщо ні, то далі не пускає - 401 Unauthorized
router.get(
  '/profile', passport.authenticate('jwt', {session: false}),
  UserController.userProfile
);

router.get(
  '/sendVerificationEmail', passport.authenticate('jwt', {session: false}),
  UserController.sendVerificationEmail
);

  // http://localhost:8081/api/receiveverificationemail?token=eyJhbGciOiJ..
router.get(
  '/receiveverificationemail', passport.authenticate('jwt.email.verification', {session: false}),
  UserController.receiveVerificationEmail
);

// router.get('/validate', function(req, res, next) {
//   res.json({user: req.user});
// });

router.get(
  '/send-mail',
  UserController.sendMail
);

module.exports = router;
