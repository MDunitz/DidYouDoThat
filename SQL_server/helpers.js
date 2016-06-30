// SQL Query > Select Data
const connectionString = 'postgres://@localhost:5432/bullet';
const pg = require('pg');
const pgp =require('pg-promise')(/*/options*/);

//TODO 
//See below
// var getAllItems = function(err, client, done, callback) {
//   var results = []
//   // SQL Query > Select Data
//   var query = client.query("SELECT * FROM items ORDER BY id ASC");

//   // Stream results back one row at a time
//   query.on('row', function(row) {
//       results.push(row);
//   });

//   // After all data is returned, close connection and return results
//   query.on('end', function() {
//       client.end();
//       callback(results);
//   });

//   // Handle Errors
//   if(err) {
//     console.log(err);
//   }
// }

// module.exports = getAllItems;


//var query = client.query("SELECT * FROM items ORDER BY id ASC");

// Stream results back one row at a time

const dateHelper=function(){
    var currDate = new Date();
    var year = currDate.getFullYear().toString();
    var month = currDate.getMonth() + 1;
    if(month.toString().length===1){
      month='0'+month.toString();
    }
    var day = currDate.getDate();
    var date =`${year}-${month}-${day}`;
    return date;
  }


const recieveData = function(err, results, query){
  // Handle Errors
  if(err) {
    done();
    console.log('err selecting', err);
  }
  query.on('row', function(row) {
      results.push(row);
  });

  // After all data is returned, close connection and return results
  query.on('end', function() {
      done();
      return res.json(results);
  }); 
}

const connectDB = function(query){
  pg.connect(connectionString, function(err, client, done){
    if(err){
      done();
      console.log('err connecting to db', err);
      return res.status(500).json({success: false, data: err});
    }

  })
}

module.exports= {
  connectDB: connectDB, 
  recieveData: recieveData, 
  dateHelper: dateHelper
};








