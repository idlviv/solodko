const config = require('../config');
let BlogsModel = require('../models/blogsModel');
const log = require('../config/winston')(module);

module.exports.addBlog = function(req, res, next) {
  // let createdBy;
  if (!req.body.title) {
    res.json({success: false, message: 'Немає заголовка'});
  } else if (!req.body.body) {
    res.json({success: false, message: 'Немає тексту повідомлення'});
  } else {
    // if (!req.user._doc.name && !req.user._doc.surname) {
    //   createdBy = req.user._doc.user;
    // } else {
    //   createdBy = req.user._doc.name + ' ' + req.user._doc.surname;
    // }

    const newBlog = new BlogsModel({
      title: req.body.title,
      body: req.body.body,
      // createdBy: createdBy,
      showOnMainPage: req.body.showOnMainPage,
      createdBy_id: req.user._doc._id
    });

    BlogsModel.addBlog(newBlog)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
};

module.exports.editBlog = function(req, res, next) {
  if (!req.body.title) {
    res.json({success: false, message: 'Немає заголовка'});
  } else if (!req.body.body) {
    res.json({success: false, message: 'Немає тексту повідомлення'});
  } else {
    BlogsModel.editBlog(req.body)
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
};

module.exports.deleteBlog = function(req, res, next) {
  BlogsModel.deleteBlog(req.params._id)
    .then(result => res.json(result))
    .catch(error => res.json(error));
};

module.exports.getBlogs = function(req, res, next) {
  BlogsModel.getBlogs()
    .then(result => res.json(result))
    .catch(error => res.json(error));
};

module.exports.findBlogs = function(req, res, next) {
  if (!req.query.searchQuery) {
    return res.json([]);
  }
  let searchQuery = JSON.parse(req.query.searchQuery);
  BlogsModel.findBlogs(searchQuery)
    .then(result => res.json(result))
    .catch(error => res.json(error));
};

module.exports.getQueriedBlogs = function(req, res, next) {
  let searchQuery = JSON.parse(req.query.searchQuery);

  BlogsModel.getQueriedBlogs(searchQuery)
    .then(result => res.json(result))
    .catch(error => res.json(error));
};
