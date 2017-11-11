var express = require('express');
var router = express.Router();
var secretLoader = require('../helpers/secret-loader.js');
var envLoader = require('../helpers/env-loader.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  secretLoader.greatSecret().then(function (value) {
    res.render('index', { title: 'Application => ' + value, message: envLoader.greatMessage });
  });

});

module.exports = router;
