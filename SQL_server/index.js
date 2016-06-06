const express =require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const router = express.Router();
const Promise = require('bluebird');

