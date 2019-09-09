const HTTPError = require('./http-error');

class IAmATeapotError extends HTTPError
{
    constructor(code, message = '') {
        super(418, code, message);
    }
}

module.exports = IAmATeapotError;