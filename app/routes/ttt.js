var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
   res.render('ttt');
});
router.post('/', function(req,res){
  res.render('test');
});

module.exports = router;