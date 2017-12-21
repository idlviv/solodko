// blog validators
let titleLengthChecker = function(title) {
  return title && title.length > 3 && title.length < 51;
};

let titleValidChecker = function(title) {
  const regExp = new RegExp(/^[a-zA-Z0-9а-яА-ЯіїєІЇЄ' ]+$/);
  return title && regExp.test(title);
};

module.exports.titleValidators = [
  {
    validator: titleLengthChecker,
    message: 'Довжина повинна бути від 4 до 50 символів'
  },
  {
    validator: titleValidChecker,
    message: 'Використовуйте тільки цифри і букви'
  },
];

let bodyLengthChecker = function(body) {
  return body && body.length > 3 && body.length < 1001;
};

// let bodyValidChecker = function(body) {
//   const regExp = new RegExp(/^[a-zA-Zа-яА-Я0-9 ]+$/);
//   return body && regExp.test(body);
// };

module.exports.bodyValidators = [
  {
    validator: bodyLengthChecker,
    message: 'Довжина повинна бути від 4 до 1000 символів'
  },
  // {
  //   validator: bodyValidChecker,
  //   message: 'Використовуйте тільки цифри і букви'
  // },
];

let commentLengthChecker = function(comments) {
  return comments[0] && comments[0].length > 0 && comments[0].length < 201;
};

module.exports.commentsValidators = [
  {
    validator: commentLengthChecker,
    message: 'Довжина повинна бути від 1 до 200 символів'
  },
];
