const config = require('../config');
const mongoose = require('mongoose');
const log = require('../config/winston')(module);

mongoose.Promise = global.Promise;

const db = config.get('MONGOOSE_URI');
// console.log(config.get('MONGOOSE_URI'));
// const db = config.get('mongoose:uri');
// const options = config.get('mongoose:options');
// mongoose.set('debug', true);

mongoose.connect(db, {useMongoClient: true})
  .then(
    () => log.verbose('Connected to db '),
    (err) => {
      console.log('Який з обробчиків помилок ловить? (err)');
      console.error('Failed to connect to db ');
      log.verbose('Error ' + err);
      // process.exit(1);
    })
  .catch(err => {
      console.log('Який з обробчиків помилок ловить? (catch)');
      console.error('Failed to connect to db ');
      log.verbose('Error ' + err);
      // process.exit(1);
    });

module.exports = mongoose;
