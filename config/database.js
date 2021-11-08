const mysql = require('mysql2')
const util = require('util')
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'phpmyadmin',
    password: 'myconstraseña',
    database: 'nombre de la base de datos'
})

pool.query = util.promisify(pool.query)
module.exports = pool;