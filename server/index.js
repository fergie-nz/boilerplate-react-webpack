const {application} = require('express')
const express = require('express')
const app = express()

const port = process.env.PORT || 3001

const shapes = require('./shapes')

app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})

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

app.delete('/shapes', (req, res) => {
    shapes.deleteShape(req.body)
    .then(response => {
        res.status(200).send(response)
    })
    .catch(error=>{
        res.status(500).send(error)
      })
})
