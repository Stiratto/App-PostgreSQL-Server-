const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const morgan = require('morgan')
const taskRoutes = require('./routes/tasks.routes')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(taskRoutes)
app.use((err, req, res, next) => {
    return res.json({
        status: "error",
        message: err.message
    })
} )

PORT=4000

app.listen(PORT, () => {
    console.log('Port is running on port', PORT)
}) 
