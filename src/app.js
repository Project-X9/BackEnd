const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const followRouter = require('./routers/follow')
// const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use('/api/v1/users', userRouter)
app.use('/api/v1/follow', followRouter)
// app.use(taskRouter)

module.exports = app