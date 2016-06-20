const passport = require('passport');

const passportService = require('./services/passport');
const Authentication = require('./controllers/authentication');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
  // app.get('/', requireAuth, function(req, res){
  //   console.log('made it to the router!')
  //   res.send({ message: 'super secret code!' });
  // });
  //expects email, password
  //returns a token
  app.post('/signin', requireSignin, Authentication.signin);

  //expects email, password
  //returns a token
  app.post('/signup', Authentication.signup);

  //expects token  (in header w/ key authorization) goal, perweek (in body)
  //returns nothing? goal id number?
  app.post('/goals',  requireAuth, Authentication.newGoal);

//TODO
  //expects token in header
  //returns array? of goals
  app.get('/goals', requireAuth, Authentication.getGoals);

}