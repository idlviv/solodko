// const mongoClient = require('../libs/MongoClient');
//
// module.exports.findMongo = function(findOptions) {
//
//   console.log('MongoClient', mongoClient);
//   return new Promise(function(resolve, reject) {
//
//     let cursor = mongoClient.collection('blogs');
//     console.log('cursor');
//
//     cursor.forEach(function (error, result) {
//       if (error) {
//         return reject({success: false, message: 'Не вдалося завантажити блог', data: error});
//       } else {
//         return resolve({success: true, data: result});
//
//       }
//     });
//   })
//
// };
