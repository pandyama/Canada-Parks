var express = require('express');
var router = express.Router();
var product_controller = require('../controller/register');
/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next){
	res.render('register');
});

router.post('/register',product_controller.reg);

module.exports = router;
