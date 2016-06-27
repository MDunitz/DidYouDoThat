var taskController = require('./tasksController');

module.exports = function(router){
  //possibly refactor get/delete to take in the userID in the path ('/goals:userID')
  router.get('/api/goals', taskController.goalsGet);
  router.post('/api/goals', taskController.goalsPost);
  router.put('/goals', taskController.goalsPut);
  router.delete('/goals', taskController.goalsDelete);
};
