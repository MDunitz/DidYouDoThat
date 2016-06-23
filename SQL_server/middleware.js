var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
  
var taskRoutes = require('./tasks/tasksRoutes');
module.exports = function(app, express){
  var taskRouter = express.Router();
  //TODO add in other routers

  app.use(morgan('dev'));
  app.use(bodyParser.json({type: '*/*'}));
  //what does urlencoded do? --look up
  app.use(bodyParser.urlencoded({extended:true}));
  //not sure if this line is necessary, possibly only for production
  app.use(express.static(__dirname + '../public'));
  
  //TODO add other routers amd refactor to use multiple Routers?
  require('./tasks/tasksRoutes.js')(app);
  require('./taskData/taskDataRoutes.js')(app);
  require('./users/userRoutes.js')(app);
}



