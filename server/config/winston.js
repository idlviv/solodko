let winston = require('winston');

let level = 'debug';
if (process.env.NODE_ENV !== 'development') {
  level = 'production'; // this will never be logged!
}

module.exports = function(module) {
  return makeLogger(module.filename);
};

function makeLogger(path) {
  let transports = [

    new winston.transports.Console({
      timestamp: false, // function() { return new Date().toString() }

      colorize: true,
      level: level,
      label: path,
      prettyPrint: true,
    }),

  ];

  return new winston.Logger({transports: transports});

  // if (path.match(/request.js$/)) {
  //
  //   var transports = [
  //
  //     new winston.transports.Console({
  //       timestamp: true, // function() { return new Date().toString() }
  //       colorize: true,
  //       level: 'info'
  //     }),
  //
  //     new winston.transports.File({ filename: 'debug.log', level: 'debug' })
  //   ];
  //
  //   return new winston.Logger({ transports: transports });
  //
  // } else {
  //
  //   return new winston.Logger({
  //     transports: []
  //   });
  //
  // }
}
