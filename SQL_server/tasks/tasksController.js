const connectionString = 'postgres://@localhost:5432/bullet'  
const pg = require('pg');
const pgp = require('pg-promise')(/*/options*/);
//var bullet = pgp(connectionString)

// const config = {
//   user: 'Madison',
//   database: 'bullet',
//   password: 'poop',
//   port: 3000,
//   host: 'localhost' 
// };

//router.get('/api/v1/goals', function(){})
module.exports = {
  goalsGet : function(req, res){
    var results=[];
    console.log('in goalsGet in tasksController')
    //need to pass user id or token in here as the header
      //if token need to get user_id from user table and then pass it into the queryzx
    
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log('err connecting to db', err);
        return res.status(500).json({ success: false, data: err});
      }
      //TODO refactor to take userID and only select from there (join table?)
      var query = client.query('SELECT * FROM tasks', function(err, results){
        if(err){
          done();
          console.log('err selecting', err);
        }
        query.on('row', function(row){
          results.push(row);
        });
        query.on('end', function(){
          done();
          return res.json(results);
        });
      });
    });
  },

  goalsPost : function(req, res){
    console.log('in goalsPost in tasksController')
    var results = [];
    var data = { 
      goal : req.body.newGoal,
      perWeek : req.body.perWeek,
      userID : req.body.userID
    };

    // Get a Postgres client from the connection pool
    //TODO refactor to transactions?

    pg.connect(connectionString, function(err, client, done){
      if(err) {
        done();
        console.log('err connecting to db', err);
        return res.status(500).json({ success: false, data: err});
      }


      client.query('INSERT INTO tasks(taskname, userid, timesperweek) values($1 $2, $3);', [data.goal, data.perWeek, data.userID]);

      var query = client.query('SELECT * FROM tasks WHERE userid=${userID};', {userID}, function(err, results){ 

        if(err){
          done();
          console.log('err selecting', err);
        }
        query.on('row', function(row){
          results.push(row);
        });
        query.on('end', function(){
          done();
          return res.json(results);
        });
      });
    });
  },

  goalsPut : function(req, res){
    console.log('in goalsPut in tasksController')
    return res.json('goalsPut')
  },

  goalsDelete : function(req, res){
    console.log('in goalsDelete in tasksController')
    return res.json('goalsDelete')
  }
}