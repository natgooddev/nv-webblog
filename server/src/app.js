let express = require('express')
let bodyParser = require('body-parser')
const {sequelize} = require('./models')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./routes')(app)

app.get('/status', function (req, res ){
  res.send('Hello nodejs server')
})

app.get('/hello/:person', function (req,res) {
  console.log('hello - ' + req.params.person)
  res.send('sey hello with ' + req.params.person)
})


let port = 8081

sequelize.sync({force: false}).then(() => {
  app.listen(port, function () {
      console.log('Server running on ' + port)
  })
})