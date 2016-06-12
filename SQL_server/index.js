const express =require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const Promise = require('bluebird');

const config = require('../config')


const router = express.Router();




app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));

router

var port = process.env.PORT || 3000;
app.get('/', function(req, res) {
  res.send('hello world');
});
app.listen(port)