const express =require('express');
const app = express();

require('./middleware.js')(app, express);

var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log('listening somewhere lols');
});

module.exports = app;
