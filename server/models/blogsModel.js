const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
const log = require('../config/winston')(module);
const blogsValidators = require('../validators/blogsValidators');

const BlogsSchema = new Schema({
  title: {type: String, required: true, validate: blogsValidators.titleValidators},
  body: {type: String, required: true, validate: blogsValidators.bodyValidators},
  createdBy: {type: String},
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
