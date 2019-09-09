const express = require('express');

const quix = express();

quix.use('/', require('./country'));
quix.use('/', require('./currency'));
quix.use('/', require('./language'));

module.exports = quix;