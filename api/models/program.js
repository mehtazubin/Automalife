'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProgramSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  programID: {
    type: String,
    Required: 'Please assign an ID'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  },
  author: {
    type: String,
    Required: 'Please enter the name of the author'
  }
});

module.exports = mongoose.model('Program', ProgramSchema);