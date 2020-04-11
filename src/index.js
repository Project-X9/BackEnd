const app = require('./app')
const port = process.env.PORT


module.exports = app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

