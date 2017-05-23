'use strict';


var mongoose = require('mongoose'),
  User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.create_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.find_user = function(req, res) {
  var query = {};
  query['username'] = req.params.username; 
  User.findOne(query, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_user = function(req, res) {
  User.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_user = function(req, res) {
  var query = {};
  query['username'] = req.params.username; 
  User.findOne(query, function(err, user) {
    if (err)
      res.send(err);
    else{
      if(user != null) {
        User.remove({username: req.params.username}, function(err, user) {
          if (err){
            res.send(err);
          }
          res.json({ message: 'User successfully deleted' });
        });
      }
      else {
        res.json({message: 'User does not exist'});
      }
    }
  });
};
