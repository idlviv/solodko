let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');
let UserController = require('../controllers/userController');
const log = require('../config/winston')(module);

const config = require('../config');
//
// router.get('/role',
//   passport.authenticate('jwt', {session: false}),
//   UserController.userRole
//   );

// реєстрація і повернення результату в фронт
router.post('/register',
  passport.authenticate('jwt.manager.admin', {session: false}),
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
  '/get-username/:_id',
  passport.authenticate('jwt.user.manager.admin', {session: false}),
  UserController.getUsernameById
);

router.get(
  '/get-users-by-ids',
  passport.authenticate('jwt.user.manager.admin', {session: false}),
  UserController.getUsersByIds
);

router.get(
  '/profile', passport.authenticate('jwt', {session: false}),
  UserController.userProfile
);

router.get(
  '/sendverificationemail',
  passport.authenticate('jwt', {session: false}),
  UserController.sendVerificationEmail
);

// http://localhost:8081/api/receiveverificationemail?token=eyJhbGciOiJ..
router.get(
  '/receiveverificationemail',
  passport.authenticate('jwt.email.verification', {session: false}),
  UserController.receiveVerificationEmail
);

// router.get(
//   '/send-mail',
//   UserController.sendMail
// );

module.exports = router;
