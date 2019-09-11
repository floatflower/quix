require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const fileLoader = require('quix/file-loader');

let app = express();
app.use(logger(process.env.NODE_ENV || "dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());

// Auto Loading all .js file from ./src/routes
fileLoader(`${__dirname}/routes`).map((route) => {
    if(path.basename(route).match(/^[a-zA-Z0-9\-]+.js$/)) {
        app.use('/', require(route));
    }
});
module.exports = app;