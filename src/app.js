const express = require('express')
const webpush = require("web-push");
const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')
const followRouter = require('./routers/follow')
const artistRouter = require('./routers/artist')
const trackRouter = require('./routers/track')
const browseRouter = require('./routers/browse')
const albumRouter = require('./routers/album')
const playlistRouter = require ('./routers/playlist')
const shareRouter = require('./routers/share')
const likeRouter = require('./routers/like')
const subscriptionRouter = require('./routers/subscriptionRouter')
const searchRouter = require('./routers/search')
// const taskRouter = require('./routers/task')
const  facebookRouter = require('./routers/facebook')

const  passport = require('passport');


const app = express()
app.use(cors());

app.use(express.json())


const publicVapidKey =
"BDGd6_hu_pl5u_eEPBImTWFn5WBzDPHoXucwGEIx8-aNq8AtrAa_V5W1MlJbduW5SoB3_r3UyYMQmRM-lGetgg0";
const privateVapidKey = "KCgcMQy1slBZmXkkwESZtAJWF2rwSKYWVSKydeSTw-M";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

app.use('/api/v1/like', likeRouter)

app.use('/api/v1/users', userRouter)

app.use('/api/v1/artist', artistRouter)

app.use('/api/v1/track', trackRouter)

app.use('/api/v1/follow', followRouter)

app.use('/api/v1/browse',browseRouter)

app.use('/api/v1/album', albumRouter)

app.use('/api/v1/playlist', playlistRouter)

app.use('/api/v1/share', shareRouter)

app.use('/api/v1/subscriptions', subscriptionRouter)
app.use('/api/v1/search',searchRouter)

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  user.findById(id, function(err, user) {
    done(err, user);
  });
});
app.use(passport.initialize());  

app.use('/api/v1/facebook',facebookRouter)



// app.use(taskRouter)
module.exports = app
