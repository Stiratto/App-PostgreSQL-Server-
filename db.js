const pg = require('pg')
const {db} = require('./config')

const pool = new pg.Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
})


module.exports = pool