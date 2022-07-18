const {application} = require('express')
const express = require('express')
const app = express()


const port = process.env.PORT || 3001

const shapeRoutes = require('./routes/shapes')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.use('/api/v1/shapes', shapeRoutes)

app.get('*', (req, res) => {
  res.sendFile(__dirname+ '/public/index.html')
})

app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})