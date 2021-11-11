const mysql = require('mysql2')
const util = require('util')
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'alejandro',
    password: 'Alemania9',
    database: 'Sistemas_Integraods'
})

pool.query = util.promisify(pool.query)
module.exports = pool;