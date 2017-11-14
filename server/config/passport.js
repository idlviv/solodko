const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const log = require('./winston')(module);

const LocalStrategy = require('passport-local').Strategy;

const UserModel = require('../models/userModel');
const config = require('./');

//Виконується при ініціалізації паспорта
module.exports = function(passport) {
  log.verbose('config/passport - initialization');
  let opts = {};
  let emailVerificationOptions = {};

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

  passport.use('jwt',
    new JwtStrategy(opts, (jwtPayload, done) => {
      log.verbose('config/passport - JwtStrategy');
      // на основі _id (витягнутого з токена) робить пошук
      // в базі, чи є такий юзер, і ф-я done повертає відповідь
      UserModel.getUserById(jwtPayload.sub._id)
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
    }
  ));
  emailVerificationOptions.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('token');
  emailVerificationOptions.secretOrKey = config.get('JWT_SECRET_EMAIL');

  passport.use('jwt.email.verification',
    new JwtStrategy(emailVerificationOptions, (jwtPayload, done) => {
        log.verbose('config/passport - JwtStrategy email.verification');
        // на основі _id (витягнутого з токена) робить пошук
        // в базі, чи є такий юзер, і ф-я done повертає відповідь
        UserModel.getUserById(jwtPayload.sub._id)
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
      }
    ));

  passport.use('local.signin',
    new LocalStrategy((username, password, done) => {
      log.verbose('config/passport - LocalStrategy');
      UserModel.getUserByUsername(username)
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          UserModel.comparePassword(password, user.password)
            .then((isMatch) => {
              if (!isMatch) {
                return done(null, false);
              } else {
                return done(null, user);
              }
            })
            .catch((err) => {
              return done(err);
            });
        })
        .catch((err) => {
          return done(err);
        });
    }
  ));
};
