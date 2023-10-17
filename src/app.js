require('dotenv').config()
const express = require("express")
const app = express();
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

//init middlewares
app.use(morgan('dev')) //log
app.use(helmet()) //security
app.use(compression()) //zip payload

//init database
require('./dbs/init.mongodb')
const {checkOverload} = require('./helpers/check.connect')
checkOverload()
//init routes
app.get('/', (req,res, next)=>{
    return res.status(200).json({
        message: 'Welcome',
    })
})

// handling error

module.exports = app