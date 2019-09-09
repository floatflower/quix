require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const subAppLoader = require('quix/subapp-loader');

let app = express();
app.use(logger(process.env.NODE_ENV || "dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cookieParser());

// Provide Utilities API
// /quix/country
// /quix/currency
// /quix/language
app.use('/', require('quix/express'));

subAppLoader(`${__dirname}/routes`).map((subApp) => {
    app.use('/', require(subApp));
});

module.exports = app;