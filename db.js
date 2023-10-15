const pg = require('pg')
const {db} = require('./config')

const pool = new pg.Pool({
    user: db.user,
    password: db.password,
    host: db.host,
    port: db.port,
    database: db.database,
    ssl: true
})

var conString = "postgres://postgres:1234@db-endpoint:5432/"
var client = new pg.Client(conString);
client.connect();


module.exports = pool