var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ProjectSchema = require('../models/project');
var UserSchema = require('../models/user');

router.get('/', function(req, res, next) {
  var Project = mongoose.model('Project', ProjectSchema);
  Project.find().then(function(projects) {
    res.render('projects_index', {'projects': projects});
  });
});
module.exports = router;
