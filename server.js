const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
// const mongoose = require('./server/libs/mongoose');

// const MongoClient = require('./server/libs/MongoClient');

const config = require('./server/config');
const errorhandler = require('errorhandler');
const HttpError = require('./server/error').HttpError;
const log = require('./server/config/winston')(module);
const csrf = require('csurf');
const csrfCookie = require('./server/libs/csrf');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// app.use(cors());
app.use(cors(config.get('corsOptions')));

//в csrf передається або { cookie: true } або замість true опції
//це автоматично відключає роботу модуля через сесії і відслідковує через кукі
//перед модулем має бути включений cookieParser()
//віддає cookie з імя"м _csrf - це не токен, а секрет
app.use(csrf({cookie: config.get('cookieCsrfOptions')}));
//встановлюю cookie XSRF-TOKEN зі значенням = токену
//Анрулар автоматично знаходить його і з кожною формою повертає в хедері
app.use(csrfCookie);

// log.info('info');
// log.debug('debug');
// log.error('error');

// app.use(express.static(path.join(__dirname, '/public')));

app.use(require('./server/middleware/sendHttpError'));

app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(passport);

const users = require('./server/routes/users');
const products = require('./server/routes/products');
const blogs = require('./server/routes/blogs');
const upload = require('./server/routes/upload');
const index = require('./server/routes');

app.use('/api', users);
app.use('/api', products);
app.use('/blogs', blogs);
app.use('/upload', upload);

app.use('/', index);

// app.use('/', (req,res) => {
//   res.sendFile(path.join(__dirname, '/public'));
// });

app.use('*', function(req, res) {
  res.redirect('/');
});

app.use(function(err, req, res, next) {
  log.verbose('id express catch error ' + err);
  // if (err.code !== 'EBADCSRFTOKEN') {
  //   res.status(403);
  //   res.send('form tampered with');
  //   // return next(err);
  // }

  if (typeof err === 'number') { //next(404);
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') === 'development') {
      let errorHandler = errorhandler();
      console.log('errorhandler catch error');
      errorHandler(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});

app.listen(process.env.PORT || config.get('port'),
  () => log.verbose('Server on port ' + config.get('port') || process.env.PORT));
