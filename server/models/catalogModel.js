const mongoose = require('../libs/mongoose');

const CatalogSchema = mongoose.Schema({
    category0: {
      name: {
        type: String,
        required: true
      },
      category1: [{
        name: {
          type: String,
          required: true
        },
        description: {
          type: String,
        },
        mainImgSrc: {
          type: [],
        },
      }],
    },
  });

let CatalogModel = mongoose.model('catalogs', CatalogSchema);
module.exports = CatalogModel;

module.exports.getCatalog = function() {
  return new Promise((resolve, reject) => {
    CatalogModel.find()
      .then((products) => resolve(products))
      .catch((err) => reject(err));
  });
};
