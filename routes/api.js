var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next){
    res.json({message: 'Welcome to the coolest API on earth!'});
});

router.get('/users', function(req, res, next){
    User.find({}, function(err, users){
        res.json(users);
    });
});

module.exports = router;