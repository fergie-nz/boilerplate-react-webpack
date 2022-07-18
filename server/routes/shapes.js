const express = require('express');
const { create } = require('lodash');

const router = express.Router()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'shapes',
  password: 'root',
  port: 5432,
});

router.get('/', (resolve, reject) => {
    getShapes()
    .then((shapes) => {
        setTimeout(()=>{
            resolve.json(shapes)
        },1000)
    })
})

router.get('/id', (resolve, reject) => {
    getOneShape(req.params.id)
        .then((shape) => {
            resolve.json(shapes)
        })
})

router.post('/', (req, res) => {
    createShape(req.body.name, req.body.array)
    .then(idArr=> {
        res.json({
            newID: idArr[0]
        })
    })
})

router.delete('/:id', (req, res) => {
    deleteShape(req.params.id)
        .then((numDeleted) => {
            res.json({deleted: numDeleted ===1 })
        })
})

const getShapes = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM shape_library ORDER BY id ASC', (error, results) => {
            if (error) {
                reject (error)
            }
        })
    })
}

const getOneShape = (id) => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT FROM shape_library (name, array) where id = $1', [id], (error, results) => {
            if (error) {
                reject (error)
            }
        })
    })
}
  
const createShape = (name, array) => {
    return new Promise(function(resolve, reject) {
        pool.query('INSERT INTO shape_library (name, array) VALUES ($1, $2) RETURNING *', [name, array], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new shape has been added: ${results.rows[0]}`)
        })
    })
}
  
const deleteShape = (body) => {
    return new Promise(function(resolve, reject) {
        const {name} = body
        pool.query('DELETE FROM shape_library where id = $1', [id], (error, results) => {
            if (error) {
                reject (error)
            }
            resolve(`Shape ${name} has been deleted`)
        })
    })
}

module.exports = router