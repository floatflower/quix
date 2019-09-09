const express = require('express');
const router = express.Router();

const http = require('quix/http');

// Uncomment when need to use http error.
// const httpError = require('quix/http/error');

router.get('/auth/logout', (req, res, next) => {

    // do something with this route.

});

module.exports = router;