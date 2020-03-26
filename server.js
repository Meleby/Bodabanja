const express = require('express')
const mongoose = require('mongoose')
var bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
const path = require('path')
const server = express()
server.use(express.static('public'))
server.set('view engine','pug')
//http parsing middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/', userRoutes)


//connect to the database
mongoose.connect('mongodb://localhost:27017/nodebanja', { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if (err) throw err;
    console.log('Successfully Connected');
    server.listen(3100, () => {
        console.log('Listening on 3100')
    })
});





