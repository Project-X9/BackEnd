const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const followRouter = require('./routers/follow')
const artistRouter = require('./routers/artist')
const trackRouter = require('./routers/track')
const browseRouter = require('./routers/browse')
// const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use('/api/v1/users', userRouter)

app.use('/api/v1/artist', artistRouter)
app.use('/api/v1/track', trackRouter)

app.use('/api/v1/follow', followRouter)
app.use('/api/v1/browse',browseRouter)
// app.use(taskRouter)

module.exports = app