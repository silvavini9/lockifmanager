var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/project');
var User = require('../models/user');

router.get('/add', function(req, res, next) {
  //TODO: Formulário de criação de um projeto
  User.find().then(function(users) {
    console.log(users);
    res.render('project_add', {user: users});
  });
});

router.get('/:projectId', function(req, res, next) {
  //TODO: Visualização do projeto
  var projectId = req.params.projectId;
  Project.find({_id: projectId}).then(function(project) { 
    res.render('project', {'project': project[0]});
  });
});

router.get('/:projectId/delete', function(req, res, next) {
  //TODO: Remove o projeto
  var projectId = req.params.projectId
  Project.findOneAndRemove({_id: projectId}, function(callback) {
    res.redirect('/projects');
  });
});

router.get('/:projectId/edit', function(req, res, next) {
  //TODO: Formulário de edição de um projeto
    var projectId = req.params.projectId;
    Project.find({_id: projectId}).then(function(project) { 
      res.render('project_edit', {'project': project[0]});
    });
});

router.post('/add/', function(req, res, next) {
  //TODO: Tratamento do formulário de criação de um projeto
  console.log(req.body);
  var name_project = req.body.name;
  var description_project = req.body.description;
  var coordinator = req.body.coordinator;
  var participants = req.body.participants;
//   var project = new Project({
//     name: name_project,
//     description: description_project,
//     users
//   });
//   project.save(function(error){
//       if(error){
//         console.error(error);
//       }

//       res.redirect('/projects');
//   })
});

router.post('/:projectId', function(req, res, next) {
  //TODO: Tratamento do formulário de edição de um projeto
  var projectId = req.params.projectId;
    Project.findOneAndUpdate( {_id: projectId}, req.body).then(function(callback) {
        res.redirect('/projects')
    });
});

module.exports = router;
