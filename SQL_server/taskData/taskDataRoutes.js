var taskDataController = require('./taskDataController');

module.exports = function(router){
  //TODO refactor to add taskId to in the path ('taskData/1:taskID')
  router.get('/taskData/1', taskDataController.taskDataGetOne);
  router.get('/taskData/all', taskDataController.taskDataGetAll);
  router.post('/taskData', taskDataController.taskDataPost);
  router.put('/taskData', taskDataController.taskDataPut);
  router.delete('/taskData', taskDataController.taskDataDelete);
}