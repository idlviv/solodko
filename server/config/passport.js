const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserModel = require('../models/userModel');
const config = require('./');

//Виконується при ініціалізації паспорта
module.exports = function(passport) {
  console.log('config/passport - initialization');
  let opts = {};

  // Реквест в хедері передає JWT token,
  // ф-я ExtractJwt.fromAuthHeader() - виділяє його
  // Перша опція JWT token
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  // Друга опція secret береться з конфіга
  opts.secretOrKey = config.get('MONGOOSE_SECRET');
  // При кожному passport.authenticate створюється новий екземпляр стратегії
  // туда передається JWT token і secret
  // з токена на основі секрета виділяється юзер
  // і передається в колбек як jwtPayload,
  // також передається ф-я done, що обробляє кінцевий рез-т
  // (після операцій з jwtPayload) і поертає відповідь на запрос
  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {

    // на основі _id (витягнутого з токена) робить пошук
    // в базі, чи є такий юзер, і ф-я done повертає відповідь
    UserModel.getUserById(jwtPayload._doc._id)
      .then((user) => {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      })
      .catch((error) => {
        done(error, false);
      });
  }));
};
