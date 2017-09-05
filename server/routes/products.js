let express = require('express');
let router = express.Router();
let passport = require('passport');
let jwt = require('jsonwebtoken');

let ProductModel = require('../models/productModel');
let CatalogModel = require('../models/catalogModel');
const config = require('../config');

router.get(
  '/getCatalog/', (req, res, next) => {
    CatalogModel.getCatalog()
      .then((catalog) => {
        console.log('cat-router', catalog);
        res.json(catalog);
      })
      .catch((error) => {
        console.log(error);
      });
  });

router.get(
  '/getProducts/', (req, res, next) => {
    ProductModel.getProducts()
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        console.log(error);
      });
  });

router.get(
  '/getQueriedProducts/', (req, res, next) => {
    console.log('searchQuery router', req.query);
    let searchQuery = JSON.parse(req.query.obj);
    ProductModel.getQueriedProducts(searchQuery)
      .then((products) => {
        res.json(products);
      })
      .catch((error) => {
        console.log(error);
      });
  });

router.use(passport.authenticate('jwt', {session: false}));

router.post(
  '/addProduct',
  // '/addProduct', passport.authenticate('jwt', {session: false}),
    (req, res, next) => {
      console.log('Server - ProductModel - authenticated');
      let newProduct = new ProductModel(req.body);
      // let newProduct = new ProductModel({
      //   itemNumber: req.body.itemNumber,
      //   name: req.body.name,
      //   price: req.body.price,
      //   mainImgSrc: req.body.mainImgSrc,
      // });
      // повертає обєкт (success..)
      ProductModel.addProduct(newProduct)
        .then((result) => res.json(result))
        .catch((error) => res.json(error));
    });

router.put(
  // '/editProduct', passport.authenticate('jwt', {session: false}),
  '/editProduct',
  (req, res, next) => {
    console.log('Server - ProductModel - authenticated');

    let editedProduct = req.body;
    ProductModel.editProduct(editedProduct)
      .then((result) => res.json(result))
      .catch((error) => res.json(error));
  });

router.delete(
  // '/editProduct', passport.authenticate('jwt', {session: false}),
  '/deleteProduct/:_id',
  (req, res, next) => {
    console.log('Server - ProductModel - authenticated');
    console.log(req.params._id);
    let deleteProduct_id = req.params._id;
    console.log('edited product' + JSON.stringify(deleteProduct_id, null, 4));
    ProductModel.deleteProduct(deleteProduct_id)
      .then((result) => res.json(result))
      .catch((error) => res.json(error));
  });

module.exports = router;
