const jwt = require('jwt-simple');

const User = require('../models/user');
const config = require('../config');

//create a token
function tokenForUser(user){
  const timestamp = new Date().getTime();

  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
}

//signin route
exports.signin = function(req, res, next){
  res.send({ token: tokenForUser(req.user) });
}

//process/respond to signup request
exports.signup = function(req, res, next){
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
      res.json({ token: tokenForUser(user) });
    });
  });
}




