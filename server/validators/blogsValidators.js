let titleLengthChecker = function(title) {
  return title && title.length >= 4 && title.length <= 50;
};

let titleValidChecker = function(title) {
  const regExp = new RegExp(/^[a-zA-Z0-9а-яА-ЯіїєІЇЄ,.()' ]+$/);
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

//-----

let bodyLengthChecker = function(body) {
  return body && body.length >= 4 && body.length <= 1000;
};

module.exports.bodyValidators = [
  {
    validator: bodyLengthChecker,
    message: 'Довжина повинна бути від 4 до 1000 символів'
  },
];

//-----

let commentLengthChecker = function(comments) {
  return comments[0] && comments[0].length > 0 && comments[0].length <= 200;
};

module.exports.commentsValidators = [
  {
    validator: commentLengthChecker,
    message: 'Довжина повинна бути від 1 до 200 символів'
  },
];

//-----

let mainTextLengthChecker = function(title) {
  return title && title.length >= 4 && title.length <= 500;
};

module.exports.mainTextValidators = [
  {
    validator: mainTextLengthChecker,
    message: 'Довжина повинна бути від 4 до 500 символів'
  },
];

//-----

let blocksTextLengthChecker = function(title) {
  return title && title.length >= 4 && title.length <= 1000;
};

module.exports.blocksTextValidators = [
  {
    validator: blocksTextLengthChecker,
    message: 'Довжина повинна бути від 4 до 1000 символів'
  },
];
