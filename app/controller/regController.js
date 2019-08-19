'use strict';
var regCnt = require('../model/regModel.js');

/* Create User ( Registration ) using GET method */
exports.registerUserGET = function(req, res) {
    res.status(400).send({ error:true, message: 'You are using wrong method ( Please use POST method ) ' });
};

/* Create User ( Registration ) using POST method */
exports.registerUserCNT = function(req, res) {
    var new_user = new regCnt(req.body);
    if(!new_user.name || !new_user.email || !new_user.password){
        res.status(400).send({ error:true, message: 'Fields cannot be empty' });
    }else{
        regCnt.createUserRegistration(data, function(err, data) {
            if (err)
            res.send(err);
            res.json(data);
        });                 
    }
};

