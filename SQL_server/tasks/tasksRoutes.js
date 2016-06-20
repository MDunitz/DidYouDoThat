var taskController = require('./tasksController');

module.exports = function(router){
  //possibly refactor get/delete to take in the userID in the path ('/goals:userID')
  router.get('/goals', taskController.goalsGet);
  router.post('/goals', taskController.goalsPost);
  router.put('/goals', taskController.goalsPut);
  router.delete('/goals', taskController.goalsDelete);
};
