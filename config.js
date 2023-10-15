const {config} = require('dotenv')
config()

module.exports = {
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST, // Utiliza la URL proporcionada por Render
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    }
}
