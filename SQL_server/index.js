const express =require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const Promise = require('bluebird');
const router = express.Router();



app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
require('./middleware.js')(app, express);


var port = 3000;
app.get('/', function(req, res) {
  console.log('blahabhbha')
  res.send('hello world');
});
app.listen(port, function(){
  console.log('listening somewhere lols');
});

module.exports = app;


