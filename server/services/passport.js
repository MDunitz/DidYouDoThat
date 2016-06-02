//passport helps with authentication when a user tries to access a protected route
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const config = require('../config');


//create local strategy
const localOptions = { usernameField: 'email' } //tells local options to look at email property of request to get username
const localLogin = new LocalStrategy(localOptions, function(err, user){
  if(err){
    console.log('problem connecting to database', err);
    return done(err);
  }
  if(!user){
    console.log('email/password is incorrect');
    return done(null, false);
  }
  user.comparePassword(password, function(err, isMatch){
    if(err){
      console.log('error comparing passwords', err);
      return done(err);
    }
    if(!isMatch){ return done(null, false); }

    return done(null, user);
  });
});

//tell jwt where to look for info in request and where to get secret
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

//create jwt strategy-authenticate endpoints using json web token
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  User.findById(payload.sub, function(err, user){
    if(err){
      console.log('search failed', err);
      return done(err, false);
    }
    if(user){
      done(null, user)
    }else{
      //no error, user wasnt found
      done(null, false)
    }
  });
});


//tell passport to use the above strategy
passport.use(jwtLogin);
passport.use(localLogin)