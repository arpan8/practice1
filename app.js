const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config()
const port = process.env.PORT || 3002
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.listen(()=> {
    console.log(`Server running on ${port}`)
})

//nodemon installed globally but you can install in dev dependencies