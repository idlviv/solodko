// email validators
let emailLengthChecker = function(email) {
  return email && email.length > 4 && email.length < 41;
};

let emailValidChecker = function(email) {
  const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return email && regExp.test(email);
};

module.exports.emailValidators = [
  {
    validator: emailLengthChecker,
    message: 'Довжина повинна бути від 5 до 40 символів'
  },
  {
    validator: emailValidChecker,
    message: 'Не коректний email'
  },
];

// username validators
let usernameLengthChecker = function(username) {
  return username && username.length > 3 && username.length < 11;
};

let usernameValidChecker = function(username) {
  const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
  return username && regExp.test(username);
};

module.exports.usernameValidators = [
  {
    validator: usernameLengthChecker,
    message: 'Довжина повинна бути від 4 до 10 символів'
  },
  {
    validator: usernameValidChecker,
    message: 'Використовуйте тільки цифри і латинські букви'
  },
];

// // password validators
// let passwordLengthChecker = function(password) {
//   return password && password.length > 3 && password.length < 11;
// };
//
// let passwordValidChecker = function(password) {
//   const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
//   return password && regExp.test(password);
// };
//
// module.exports.passwordValidators = [
//   {
//     validator: passwordLengthChecker,
//     message: 'Довжина повинна бути від 4 до 10 символів'
//   },
//   {
//     validator: passwordValidChecker,
//     message: 'Використовуйте цифри і латинські букви'
//   },
// ];
