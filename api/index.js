const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const PORT = 8000
const logger = require('morgan')
const path = require('path')
require('dotenv').config()

const connectDB = require('../db/connect')
const router = require('../router/router')


// express config 
app.use(cors({ origin : "*"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(helmet())

process.env.NODE_ENV == "development"  && app.use(logger('dev'))

// db connection
connectDB()

// production 
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.get("/", (_, res) => {
    res.sendFile(
        path.join(__dirname, './client/build/index.html'),
        function (err) {
            err && res.status(500).send(err)
        }
    )
})

// api endpoint 
app.use('/api/v1/' , router)

// express listen server 
app.listen(PORT , () => { 
    try {
        console.log('server running on' , PORT)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})