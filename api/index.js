const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const PORT = 8000
const logger = require('morgan')
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