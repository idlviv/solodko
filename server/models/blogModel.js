const mongoose = require('../libs/mongoose');
const Schema = mongoose.Schema;
const config = require('../config');
const log = require('../config/winston')(module);
const blogValidators = require('../validators/blogValidators');

const BlogSchema = new Schema({
  title: {type: String, required: true, validate: blogValidators.titleValidators},
  body: {type: String, required: true, validate: blogValidators.bodyValidators},
  createdBy: {type: String},
  createdAt: {type: Date, default: Date.now()},
  likes: {type: Number, default: 0},
  likedBy: {type: Array},
  dislikes: {type: Number, default: 0},
  dislikedBy: {type: Array},
  comments: [{
    comment: {type: String, validate: blogValidators.commentsValidators},
    commentator: {type: String}
  }]
});

let BlogModel = mongoose.model('blog', BlogSchema);
module.exports = BlogModel;
