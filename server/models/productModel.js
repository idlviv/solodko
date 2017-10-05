const mongoose = require('../libs/mongoose');

const ProductSchema = mongoose.Schema({
  category0: {
    type: String,
    required: true
  },
  category1: {
    type: String,
    required: true
  },
  itemNumber: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  mainImgSrc: {
    type: [],
    required: true,
  },
  itemDescription: {
    type: String,
    required: true
  },
  showOnMainPage: {
    type: Boolean
  },
  discount: {
    type: Number
  },
  size: {
    width: {
      type: Number
    },
    height: {
      type: Number
    },
  }
});

let ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;

module.exports.getProducts = function() {
      return new Promise((resolve, reject) => {
        ProductModel.find()
          .then((products) => resolve(products))
          .catch((err) => reject(err));
      });
    };

module.exports.getQueriedProducts = function(searchQuery) {
      console.log('searchQuery - model', JSON.stringify(searchQuery));
      return new Promise((resolve, reject) => {
            ProductModel.find(searchQuery)
              .then((products) => resolve(products))
              .catch((err) => reject(err));
          });
    };

module.exports.addProduct = function(newProduct) {
  return new Promise(function(resolve, reject) {
      newProduct.save()
        .then(() => resolve({success: true, msg: 'Product added'}))
        .catch(() => reject({success: false, msg: 'Failed to add product'}));
    })
    .catch((error) => {throw error;});
};

module.exports.editProduct = function(editedProduct) {
  return new Promise(function(resolve, reject) {
        ProductModel.update({_id: editedProduct._id}, editedProduct)
          .then(() => resolve({success: true, msg: 'Product edited'}))
          .catch(() => reject({success: false, msg: 'Failed to edit product'}));
      })
      .catch((error) => {throw error;});
};

module.exports.deleteProduct = function(deleteProduct_id) {
  return new Promise(function(resolve, reject) {
        ProductModel.remove({_id: deleteProduct_id})
          .then((writeResult) => resolve({success: true, msg: 'Product deleted',
            numberOfDeletedElements: writeResult}))
          .catch(() => reject({success: false, msg: 'Failed to delete product'}));
      })
      .catch((error) => {throw error;});
};
