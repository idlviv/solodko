const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
const log = require('../config/winston')(module);
const blogsValidators = require('../validators/blogsValidators');

const BlogsSchema = new Schema({
  title: {type: String, required: true, validate: blogsValidators.titleValidators},
  body: {type: String, required: true, validate: blogsValidators.bodyValidators},
  createdBy: {type: String},
  createdBy_id: {type: String},
  createdAt: {type: Date, default: Date.now()},
  likes: {type: Number, default: 0},
  likedBy: {type: Array},
  dislikes: {type: Number, default: 0},
  dislikedBy: {type: Array},
  comments: [{
    comment: {type: String, validate: blogsValidators.commentsValidators},
    commentator: {type: String}
  }]
});

let BlogsModel = mongoose.model('blogs', BlogsSchema);
module.exports = BlogsModel;

module.exports.addBlog = function(newBlog) {
  return new Promise(function(resolve, reject) {
    newBlog.save(newBlog)
      .then(() => resolve({success: true, message: 'Новий пост зареєстровано'}))
      .catch((error) => {
        if (error.name === 'ValidationError') {
          reject({success: false, message: 'Помилка валідації даних, ' + error.message, error});
        } else {
          reject({success: false, message: 'Новий пост не зареєстровано', error});
        }
      });
  });
};

module.exports.getBlogs = function() {
  return new Promise(function(resolve, reject) {
      BlogsModel.find().sort({'_id': -1})
        .then((blogs) => resolve({success: true, data: blogs}))
        .catch((error) => reject({success: false, message: 'Не вдалося завантажити блог', data: error}));
    }
  );
};

module.exports.getQueriedBlogs = function(searchQuery) {
  return new Promise(function(resolve, reject) {
      let query = {};
      if (searchQuery.type = 'object') {
        query[searchQuery.query.key] = searchQuery.query.value;
      }
      BlogsModel.find(query)
        .then((blogs) => {
          return resolve({success: true, data: blogs});
        })
        .catch((error) => reject({success: false, message: 'Не вдалося завантажити блог', data: error}));
    }
  );
};

module.exports.editBlog = function(searchQuery) {
  return new Promise(function(resolve, reject) {
      let query = {};
      if (searchQuery.type = 'object') {
        query[searchQuery.query.key] = searchQuery.query.value;
      }
      BlogsModel.update(query, searchQuery.data)
        .then(() => {
          return resolve({success: true,  message: 'Зміни збережені'});
        })
        .catch((error) => reject({success: false, message: 'Не вдалося зберегти зміни', data: error}));
    }
  );

};