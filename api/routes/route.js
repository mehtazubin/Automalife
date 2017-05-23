'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');


  // todoList Routes
  app.route('/users')
    .get(todoList.list_all_users)
    .post(todoList.create_user);


  app.route('/users/:username')
    .get(todoList.find_user)
    .put(todoList.update_user)
    .delete(todoList.delete_user);
};
