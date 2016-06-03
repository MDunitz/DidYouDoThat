const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');


const Schema = mongoose.Schema;

//define model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

//before saving, encrypt password
userSchema.pre('save', function(next){
  console.log('saving password');
  const user = this;
  bcrypt.genSalt(10, function(err, salt){
    if(err) {
      console.log('generate salt error', err);
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, function(err, hash){
      if(err) {
        console.log('hash password error', err);
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback){
  console.log('comparing password');
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err){
      console.log('error in comparePassword', err);
      return callback(err);
    }
    callback(null, isMatch);
  });
}

const ModelClass = mongoose.model('user', userSchema);
module.exports = ModelClass;