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
// const taskRouter = require('./routers/task')

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


app.use('/api/v1/users', userRouter)

app.use('/api/v1/artist', artistRouter)
app.use('/api/v1/track', trackRouter)

app.use('/api/v1/follow', followRouter)
app.use('/api/v1/browse',browseRouter)
// app.use(taskRouter)

app.use('/api/v1/album', albumRouter)
app.use('/api/v1/playlist', playlistRouter)

app.use('/api/v1/share', shareRouter)

module.exports = app
