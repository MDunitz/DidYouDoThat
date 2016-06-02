const express =require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./router');


//***DB (mongodb) setup***
//from the command line (project directory)
  //brew update
  //brew install mongodb
//create the data directory-place to save the data being collected
  //mkdir -p /data/db
//set permissions on the directory we just created
  //sudo chown -R $USER /data/db
//start mongodb
  //mongod

//connect mongoose to this instance of mongodb 
  //this creates a new db inside of mongodb called DidYouAuth
  mongoose.connect('mongodb://localhost:auth/DidYouAuth');


//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));

//Server setup
const port = process.env.PORT || 8383;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port ', port);
console.log('check out the app at http://localhost:', port);


