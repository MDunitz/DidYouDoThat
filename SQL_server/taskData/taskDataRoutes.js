var taskDataController = require('./taskDataController');

module.exports = function(router){
  //TODO refactor to add taskId to in the path ('taskData/1:taskID')
  router.get('api/taskData/1', taskDataController.taskDataGetOne);
  router.get('api/taskData/all', taskDataController.taskDataGetAll);
  router.post('/api/taskData', taskDataController.taskDataPost);
  router.put('api/taskData', taskDataController.taskDataPut);
  router.delete('api/taskData', taskDataController.taskDataDelete);
}