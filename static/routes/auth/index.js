const express = require('express');

const auth = express();

auth.use('/', require('./login'));
auth.use('/', require('./logout'));
auth.use('/', require('./register'));
auth.use('/', require('./forget-password'));
auth.use('/', require('./reset-password'));

module.exports = auth;