const express = require('express')
const deployRouter = require('./routers/deploy_test')
require('./db/mongoose')    
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use("/api",deployRouter);
// app.use(taskRouter)

module.exports = app