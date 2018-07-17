var mongoose = require('mongoose');
var user = require('../model/user');
var express = require('express');
var bodyParser = require('body-parser');
/*exports.test = function(req, res){
	res.send('Greetings from Test Controller');
};*/

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


exports.reg = function(req, res){
	var usr = {
       username: req.body.username,
       password: req.body.password,
       fname: req.body.firstname,
       lname: req.body.lastname,
       email: req.body.email
   };

   let newUser = new user(usr);
   newUser.save(function(err){
		if(err){
			console.log(err);
			return;
		}
		else{
			return res.send("Success!!!");
		}
	});
};