const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('./server/libs/mongoose');
const config = require('./server/config');
const errorhandler = require('errorhandler');
const HttpError = require('./server/error').HttpError;
const log = require('./server/config/winston')(module);

const app = express();

const users = require('./server/routes/users');
const products = require('./server/routes/products');
const index = require('./server/routes');

app.use(cors());

// log.info('fef');
// log.debug('sdfsdf');
// log.error('sdfsdf');
// app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
// console.log(config.get('process.env.MONGOOSE_URI'));
// console.log(config.get('NODE_ENV'));

app.use(require('./server/middleware/sendHttpError'));

app.use(passport.initialize());
app.use(passport.session());
require('./server/config/passport')(passport);

app.use('/api', users);
app.use('/api', products);

app.use('/', index);

// app.use('/', (req,res) => {
//   res.sendFile(path.join(__dirname, '/public'));
// });

app.use('*', function(req, res) {
  res.redirect('/');
});

app.use(function(err, req, res, next) {
  console.log('id express catch error ' + err);
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
  () => console.log('Server on port ' + config.get('port') || process.env.PORT));
