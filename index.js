var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var db = require('./dbconnection');

var urlencodedParser = bodyParser.urlencoded({extended: false});


router.get('/', function(req, res){
	res.redirect('/login.html');
});

router.route('/login').get(function(req, res) {
	var client = db.connect();
	db.getDetails(client, req.query.username, function(result) {
		if (result[0] === "") {
			res.send("Username not in system")
		} else {
			if (result[0].password === req.query.password) {
				res.send('{"Login":"success"}');
			} else {
				res.send('{"result":"fail"')
			}
		}
	});
});

router.route('/register').get(function(req, res) {
	var client = db.connect();
	db.insertDetails(client, req.query.username, req.query.email, req.query,password, function(result){
		res.send('{"result":'+ result +'"}');
	});
});

module.exports = router;