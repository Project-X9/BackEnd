const express = require('express');
const router = express.Router();
const passport = require('passport');
var config = require('../auth');
const facebookAuth = require('../controllers/facebook');
var FacebookStrategy = require('passport-facebook').Strategy;



//setup configuration for facebook login


    passport.use('facebookToken', new FacebookStrategy({
    
      clientID: config.clientID,
      clientSecret: config.clientSecret,
      callbackURL: config.callbackURL,
      profileFields: ['id', 'displayName', 'emails', 'gender', 'birthday']
    }, function (accessToken, refreshToken, profile, done) {
      
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: profile.displayName,
        email: profile.emails[0].value,
        age: profile.age,
        gender: profile.gender,
        tokens: concat({ token: token })
      });
      
      /* save if new */
      console.log("HERE")
      User.findOne({ email: user.email }, function (err, result) {
        if (!result) {
  
          user.save(function (err, me) {
            if (err) return done(err);
            done(null, user);
          });
        } else {
          done(null, result);
        }
      });
    }
    ));
router
.post('/facebook', passport.authenticate('facebookToken', {session: false, scope: ['email',  'public_profile', 'user_location']}), facebookAuth.facebookOAuth);

router
.post('/facebook/callback', passport.authenticate('facebookToken', { successRedirect: '/', failureRedirect: '/user/login' }));
/* ,
 function(req, res) {
    res.redirect('/account')
});*/

module.exports = router;