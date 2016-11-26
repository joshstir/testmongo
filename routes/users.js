var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/setup', function(req, res, next){
  var josh = new User({
    name: "Josh Stir",
    password: "password",
    admin: true
  });

  josh.save(function(err){
    if (err) throw err;

    console.log('User saved successfully');
    res.json({success: true});
  });
});

module.exports = router;
