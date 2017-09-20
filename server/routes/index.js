let express = require('express');
let router = express.Router();
let path = require('path');

// router.get('/', function() {
//   res.sendFile(path.join(__dirname, '/public'));
// });

router.use('/', express.static(path.join(__dirname, '/../../public'), {redirect: false}));

router.get('*', function(req, res, next) {

  res.sendFile(path.resolve('public/index.html'));
});

module.exports = router;
