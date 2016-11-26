var express = require('express');
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var app = require('../app');

router.get('/', function(req, res, next){
    res.json({message: 'Welcome to the coolest API on earth!'});
});

router.get('/users', function(req, res, next){
    User.find({}, function(err, users){
        res.json(users);
    });
});

router.post('/authenticate', function(req, res, next){
    
    User.findOne({
        name: req.body.name
    }, function(err, user){
        if (err) throw err;

        if (!user){
            res.json({ success: false, message: 'Authentication failed. User not found'});
        } else if (user) {

            //check if password matches
            if (user.password != req.body.password) {
                res.json({success: false, message: 'Authentication failed. Wrong password.'});
            }
            else {
                //user found and password correct, so create token
                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: "1 day" //expire in 24 hours
                });

                res.json({
                    success: true,
                    message: 'Enjoy your token',
                    token: token
                });
            }
        }
    })
});

module.exports = router;