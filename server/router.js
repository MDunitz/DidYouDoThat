const passport = require('passport');

const passportService = require('./services/passport');
const Authentication = require('./controllers/authentication');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app){
  app.get('/', requireAuth, function(req, res){
    console.log('made it to the router!')
    res.send({ message: 'super secret code!' });
  });

  app.post('/signin', requireSignin, Authentication.signin);

  app.post('/signup', Authentication.signup);

  app.post('/goals', Authentication.newGoal);


}