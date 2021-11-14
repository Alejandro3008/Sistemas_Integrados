const mysql = require('mysql2')
const util = require('util')
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistemas_integrados'
})

pool.query = util.promisify(pool.query)
module.exports = pool;