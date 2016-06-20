const usersController = require ('./userDataController');

module.exports = function(router){
  router.post('/user', usersController.usersLogin);
  router.post('/user/new', usersController.usersSignUp);
}