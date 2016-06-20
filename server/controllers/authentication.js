const jwt = require('jwt-simple');

const User = require('../models/user');
const config = require('../../config');

//create a token
function tokenForUser(user){
  const timestamp = new Date().getTime();

  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

//signin route
exports.signin = function(req, res, next){
  console.log('in signin');
  res.send({ token: tokenForUser(req.user) });
}

//process/respond to signup request
exports.signup = function(req, res, next){
  console.log('in signup');
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
    return res.status(422).send({ error: 'you must provide an email and password' });
  }

  User.findOne({ email: email }, function(err, existingUser){
    if(err){
      console.log('connection to database error', err);
      return next(err);
    }
    if(existingUser){
      return res.status(422).send({ error: 'Email is in use' });
    }
    //if user with the email does not exist create and save a new user record
    const user = new User({
      email: email,
      password: password
    });
    //save record to database
    user.save(function(err){
      if(err){
        console.log('err saving user record to database', err);
        return next(err);
      }
      //send back token for user to store/use in authenticated requests
      console.log('saved it')
      res.json({ token: tokenForUser(user) });
    });
  });
}

//TODO refactor into goals controller
//add a newgoal
exports.newGoal = function(req, res, next){
  console.log('adding a goal');
  const goal = req.body.goal;
  const perWeek = req.body.perWeek;
  const email = req.body.email;
  if(!goal || !perWeek){
    return res.status(422).send({error: 'you must provide a goal and a number/week' });
  }
  User.findOne({email}), function(err, existingUser){
    if(err){
      console.log('connection to the database error', err);
      return next(err);
    }
    if(existingUser){
      //TODO-create goals schema?
      goals.save(function(err){
        if(err){
          console.log('err saving goal to database', err);
          return next(err);
        }
        console.log('saved it');
        //TODO return goal id
        res.json({ goalId })
      });
    }
  }
  console.log({goal, perWeek});
  res.send({blrgh: 'blrgh'})
}

exports.getGoals = function(req, res, next){
  console.log('getting the goals');
  

}


