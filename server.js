const express = require('express')
const bodyParser = require('body-parser')

const checkUnixTimestamp = require('./utilityFunctions')

// instantiate the app and define the port number
const app = express()
const port = 8080

// parse string parameters in the url
app.use(bodyParser.urlencoded({ extended: true }))

// setup the main route for the API
app.get('/:input', (req, res) => {
  res.json(checkUnixTimestamp(req.params.input))
})

// any other route will default to serving the static intro page
app.route('*').get((req, res) => {
  res.sendFile('index.html', { root: './' });
});

// start server...
app.listen(port, () => {
  console.log(` ~ listening on port ${port}`)
})
