const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')
const followRouter = require('./routers/follow')
const artistRouter = require('./routers/artist')
const trackRouter = require('./routers/track')
const browseRouter = require('./routers/browse')
const albumRouter = require('./routers/album')
const playlistRouter = require ('./routers/playlist')
// const taskRouter = require('./routers/task')

const app = express()
app.use(cors());

app.use(express.json())
app.use('/api/v1/users', userRouter)

app.use('/api/v1/artist', artistRouter)
app.use('/api/v1/track', trackRouter)

app.use('/api/v1/follow', followRouter)
app.use('/api/v1/browse',browseRouter)
// app.use(taskRouter)

app.use('/api/v1/album', albumRouter)
app.use('/api/v1/playlist', playlistRouter)

module.exports = app
