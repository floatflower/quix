const HTTPError = require('./http-error');

class TooManyRequestError extends HTTPError
{
    constructor(code, message = '') {
        super(429, code, message);
    }
}

module.exports = TooManyRequestError;