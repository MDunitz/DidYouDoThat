const connectionString = 'postgres://@localhost:5432/bullet';
const pg = require('pg');
const pgp =require('pg-promise')(/*/options*/);
const dateHelper = require('./../helpers');


module.exports = {
  taskDataGetOne: function(req, res){
    var results = [];
    console.log('in taskDataGet in taskDataController');

    pg.connect(connectionString, function(err, client, done){
      if(err){
        done();
        console.log('err connecting to db', err);
        return res.status(500).json({success: false, data: err});
      }
      //TODO refactor to only get one tasks worth of data
      var query = client.query('SELECT * FROM taskData', function(err, results){
        if(err){
          done();
          console.log('err selecting', err);
        }
        query.on('row', function(row){
          results.push(row);
        });
        query.on('end', function(){
          done ();
          return res.json(results);
        });
      });
    });
  },

  taskDataGetAll: function(req, res){
    var results = [];
    console.log('in taskDataGet in taskDataController');

    pg.connect(connectionString, function(err, client, done){
      if(err){
        done();
        console.log('err connecting to db', err);
        return res.status(500).json({success: false, data: err});
      }
      //TODO refactor to only get one users data
      var query = client.query('SELECT * FROM taskData', function(err, results){
        if(err){
          done();
          console.log('err selecting', err);
        }
        query.on('row', function(row){
          results.push(row);
        });
        query.on('end', function(){
          done ();
          return res.json(results);
        });
      });
    });
  },

  taskDataPost: function(req, res){
    var results = [];
    console.log('in taskDataPost in taskDataController', req);
    var date = dateHelper();
    var data = {
      date : date,
      done : req.body.done,
      otherInfo : req.body.otherInfo,
      userId : req.body.userId,
      taskId : req.body.taskId
    };
    //TODO figure out how to get the task id, may need to use transactions to retrieve it from tasks and then use it
    pg.connect(connectionString, function(err, client, done){
      if(err){
        done();
        console.log('err connecting to db', err);
        return res.status(500).json({success : false, data : err});
      }
      client.query('INSERT INTO taskData(date, done, otherInfo, userid, taskid) values($1, $2, $3, $4, $5);', [data.date, data.done, data.otherInfo, data.userId, data.taskId]);
    })
    //TODO close connection and send back success resposne
  },
   taskDataPut : function(req, res){
    console.log('in taskDataPut in taskDataController')
    return res.json('taskDataPut')
  },

  taskDataDelete : function(req, res){
    console.log('in taskDataDelete in taskDataController')
    return res.json('taskDataDelete')
  }
  //TODO add a way to delete all?

}