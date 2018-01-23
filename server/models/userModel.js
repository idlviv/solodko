const mongoose = require('../libs/mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config');
const log = require('../config/winston')(module);
const userValidators = require('../validators/userValidators');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: userValidators.nameValidators
  },
  surname: {
    type: String,
    required: true,
    validate: userValidators.nameValidators
  },
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: userValidators.usernameValidators
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: userValidators.emailValidators
  },
  password: {
    type: String,
    required: true,
    // validate: userValidators.passwordValidators
  },
  role: {
    type: String,
    required: true,
    enum: ['User', 'Manager', 'Admin'],
    default: 'User',
  },
  isEmailConfirmed: {
    type: Boolean,
    required: true,
    default: false,
  },
  avatar: {
    type: String,
    required: true,
    default: './assets/samples/default-avatar180x180.png'
  }
});

let UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;

module.exports.getUsersByIds = function(searchQuery) {
  return new Promise((resolve, reject) => {
    console.log('searchQuery', searchQuery);
    UserModel.find(searchQuery, {username: 1, avatar: 1})
      .then((result) => {
        return resolve({success: true, message: 'Користувач знайдений', data: result});
      })
      .catch((error) => reject({success: false, message: 'Користувач не знайдений', data: error}));
  });
};

module.exports.getUsernameById = function(_id) {
  return new Promise((resolve, reject) => {
    UserModel.find({_id: _id}, {username: 1})
      .then((result) => {
        return resolve({success: true, message: 'Користувач знайдений', data: result});
    })
      .catch((error) => reject({success: false, message: 'Користувач не знайдений', data: error}));
  });
};

module.exports.getUserById = function(_id) {
  return new Promise((resolve, reject) => {
    UserModel.findById(_id)
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
};

module.exports.getUserByUsername = function(username) {
  let query = {username: username};
  return new Promise((resolve, reject) => {
    UserModel.findOne(query)
      .then((user) => resolve(user))
      .catch((error) => reject(error));
  });
};

module.exports.comparePassword = function(candidatePassword, hash) {
  return new Promise(function(resolve, reject) {
    bcrypt.compare(candidatePassword, hash)
      .then((isMatch) => resolve(isMatch))
      .catch((error) => reject(error));
  });
};

module.exports.addUser = function(newUser) {
  return new Promise(function(resolve, reject) {
    // хешує пароль, і записує вже хешований в user.password
    bcrypt.hash(newUser.password, 10)
      .then((hash) => {
          newUser.password = hash;
          // якшо успішно записано в базу, то повертає в роутер відп обєкт
          newUser.save()
            .then(() => resolve({success: true, msg: 'Користувача зареєстровано'}))
            .catch((error) => {
              log.verbose('registration error - ', error);
              if (error.code === 11000) {
                reject({success: false, msg: 'Ім\'я користувача або email вже існує', error})
              } else {
                if (error.name === 'ValidationError') {
                  reject({success: false, msg: 'Помилка валідації даних, ' +
                    error.message, error});
                } else {
                  reject({success: false, msg: 'Не вдалося зареєструвати користувача', error});
                }
              }
            });
        })
      .catch((error) => {throw error;});
  });
};

module.exports.updateUser = function(query, update) {
  return new Promise(function(resolve, reject) {

        // якшо успішно записано в базу, то повертає в роутер відп обєкт
        UserModel.update(query, update)
          .then(() => resolve({success: true, msg: 'User updated'}))
          .catch(() => reject({success: false, msg: 'Failed to update user'}))
      });
};
