const {application} = require('express')
const express = require('express')
const app = express()

const port = process.env.PORT || 3001

const shapeRoutes = require('./routes/shapes')
const shapes = require('./shapes')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.use('/api/v1/shapes', shapeRoutes)

app.get('/', (req, res) => {
  shapes.getShapes()
  .then(response => {
    res.status(200).send(response)
  })
  .catch(error=>{
    res.status(500).send(error)
  })
})

app.post('/shapes', (req, res) => {
    shapes.createShape(req.body)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error=>{
        res.status(500).send(error)
      })
})

app.delete('/shapes/:id', (req, res) => {
    shapes.deleteShape(req.params.id)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error=>{
        res.status(500).send(error)
      })
})

app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})