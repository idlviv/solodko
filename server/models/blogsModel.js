const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
const log = require('../config/winston')(module);
const blogsValidators = require('../validators/blogsValidators');
const ObjectId = mongoose.Types.ObjectId;

const BlogsSchema = new Schema({
  title: {type: String, required: true, validate: blogsValidators.titleValidators},
  body: {
    mainImage: {type: String, required: true},
    mainText: {type: String, required: true, validate: blogsValidators.mainTextValidators},
    components: [{
      material: {type: String},
      quantity: {type: Number},
      unit: {type: String},
    }],
    blocks: [{
      image: {type: String},
      text: {type: String, validate: blogsValidators.blocksTextValidators},
    }],
  },
  createdBy: {type: String},
  createdBy_id: {type: String, required: true},
  showOnMainPage: {type: Boolean, default: false},
  createdAt: {type: Date, default: Date.now()},
  likes: {type: Number, default: 0},
  likedBy: {type: Array},
  dislikes: {type: Number, default: 0},
  dislikedBy: {type: Array},
  comments: [{
    comment: {type: String, validate: blogsValidators.commentsValidators},
    commentators_id: {type: String},
    commentedAt: {type: Date, default: Date.now()},
  }],
  views: {type: Number}
});

let BlogsModel = mongoose.model('blogs', BlogsSchema);
module.exports = BlogsModel;

module.exports.addComment = function(newComment) {
  return new Promise(function(resolve, reject) {
    console.log('model', newComment);
    BlogsModel.updateOne(
      {_id: newComment.blog},
      {
        $push: {
          comments: {
            $each: [{
              comment: newComment.comment,
              commentators_id: newComment.commentators_id,
              commentedAt: Date.now(),
            }],
            $sort: {commentedAt: -1},
            $position: 0
          }
        }
      })
      .then(() => resolve({success: true, message: 'Коментар добавлено'}))
      .catch((error) => reject({success: false, message: 'Коментар не добавлено', data: error}))
  });
};

updateViews = function(_id) {
  return new Promise(function(resolve, reject) {
    BlogsModel.updateOne({'_id': _id}, {$inc: {views: 1}})
      .then(() => resolve({success: true, message: 'К-ть переглядів збільшено на 1'}))
      .catch((error) => reject({success: false, message: 'К-ть переглядів не збільшено на 1', data: error}))
  });
};

// findEngine = function(searchQuery) {
//   return new Promise(function(resolve, reject) {
//       BlogsModel.find(searchQuery).sort({_id: -1})
//         .then((blogs) => {
//           return resolve({success: true, data: blogs});
//         })
//         .catch((error) => reject({success: false, message: 'Не вдалося завантажити блог', data: error}));
//     }
//   );
// };
//
// module.exports.findBlogs = function(searchQuery) {
//   return new Promise(function(resolve, reject) {
//     if (searchQuery._id && searchQuery.update) {
//       updateViews(searchQuery._id)
//         .then(() => resolve(findEngine({_id: searchQuery._id})))
//         .catch((error) => reject(error));
//     } else if (searchQuery._id) {
//       resolve(findEngine({_id: searchQuery._id}));
//     } else {
//       resolve(findEngine(searchQuery));
//     }
//   });
// };

module.exports.findMongo = function(findOptions) {

  return new Promise(function(resolve, reject) {

    if ('_id' in findOptions.query) {
      findOptions.query._id = ObjectId(findOptions.query._id);
    }

    let db = BlogsModel.aggregate([{$match: findOptions.query}]);

    if ('options' in findOptions) {
      findOptions.options.forEach(
        option => db.append(option)
      );
    }

    if ('updateViews' in findOptions) {
      updateViews(findOptions.updateViews);
    }

    db.exec()
      .then((result) => {
          return resolve({success: true, data: result});
        })
      .catch((error) => reject({success: false, message: 'Не вдалося завантажити блог', data: error}));
  });
};

module.exports.updateMongo = function(updateOptions) {
  if ('_id' in updateOptions.query) {
    updateOptions.query._id = ObjectId(updateOptions.query._id);
  }
  return new Promise(function(resolve, reject) {
    BlogsModel.update(updateOptions.query, updateOptions.update)
      .then((result) => {
      return resolve({success: true, data: result, message: 'Зміни внесено'})
    })
      .catch((error) => {
        reject({success: false, message: 'Помилка ' + error.message, error});

        // if (error.name === 'ValidationError') {
        //   reject({success: false, message: 'Помилка валідації даних, ' + error.message, error});
        // } else {
        //   reject({success: false, message: 'Новий пост не зареєстровано', error});
        // }
      });
  });
};

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

module.exports.editBlog = function(editedBlog) {
  return new Promise(function(resolve, reject) {
      BlogsModel.update({'_id': editedBlog._id}, editedBlog)
        .then(() => {
          return resolve({success: true,  message: 'Зміни збережені'});
        })
        .catch((error) => reject({success: false, message: 'Не вдалося зберегти зміни', data: error}));
    }
  );
};

module.exports.deleteBlog = function(_id) {
  return new Promise(function(resolve, reject) {
    BlogsModel.remove({_id: _id})
      .then(() => resolve({success: true, message: 'Пост видалений'}))
      .catch(error => reject({success: false, message: 'Не вдалося видалити пост', data: error}))
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
      BlogsModel.find(query).sort({'_id': -1})
        .then((blogs) => {
          return resolve({success: true, data: blogs});
        })
        .catch((error) => reject({success: false, message: 'Не вдалося завантажити блог', data: error}));
    }
  );
};
