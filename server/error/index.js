let path = require('path');
let util = require('util');
let http = require('http');

function HttpError(status, message) {
  Error.apply(this, arguments);

  // Записує стек помилки цієї ф-ї (this)
  // пише тільки помилки нижче HttpError
  Error.captureStackTrace(this, HttpError);

  this.status = status;
  this.message = message || http.STATUS_CODES[status] ;
}

util.inherits(HttpError, Error);

HttpError.prototype.name = 'HttpError';

exports.HttpError = HttpError;
