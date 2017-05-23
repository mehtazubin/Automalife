'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
    type: String,
    Required: 'Please provide a name'
  },
  join_date: {
    type: Date,
    default: Date.now
  },
  display_name: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);