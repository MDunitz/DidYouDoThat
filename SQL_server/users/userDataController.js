
//TODO refactor to ES6
const pg = require('pg');
const pgp = require('pg-promise')(/*options*/);
const connectionString = require('../db/init');
const bulletDB = pgp(connectionString);

const errors = function(err){
  console.log(err);
  res.send(err);
}

module.exports = {
  //Post request to database
    //expects email, hashed password
    //checks for exsistance of email in db
    //compare passwords
    //returns confirmation of user -> create token for auth routes?
  usersLogin: function(req, res){
    // Grab data from http request
    var data = {
      email: req.body.email,
      hashPass: req.body.password
    };
    bulletDB.tx(function(data) {
      return data.oneOrNone('SELECT id FROM users WHERE email=${email}', data)
    })
      .then(function(userID){
        res.send(userID);
      })
      .catch (function(err){
        errors(err);
      })

  },
  //Post request to database, 
    //checks for exsistance of email in db
      //if none inserts into the db
    //expects email, hashed password
    //returns user confirmation -> create token for auth routes?
  usersSignUp: function(req, res){

  }
}