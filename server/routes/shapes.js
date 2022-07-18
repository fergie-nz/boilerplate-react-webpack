const express = require('express')

const router = express.Router()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'shapes',
  password: 'root',
  port: 5432,
});

router.getShapes = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM shape_library ORDER BY id ASC', (error, results) => {
            if (error) {
                reject (error)
            }
        })
        .then((shapes) => {
            setTimeout(() => )
        })
    })
}
  
router.createShape = (body) => {
    return new Promise(function(resolve, reject) {
        const {name, array} = body
        pool.query('INSERT INTO shape_library (name, array) VALUES ($1, $2) RETURNING *', [name, array], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new shape has been added: ${results.rows[0]}`)
        })
    })
}
  
router.deleteShape = (body) => {
    return new Promise(function(resolve, reject) {
        const {name} = body
        pool.query('DELETE FROM shape_library where name = $1', [id], (error, results) => {
            if (error) {
                reject (error)
            }
            resolve(`Shape ${name} has been deleted`)
        })
    })
}

module.expores = router