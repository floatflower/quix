const HTTPError = require('./http-error');

class RequestTimeoutError extends HTTPError
{
    constructor(code, message = '') {
        super(408, code, message);
    }
}

module.exports = RequestTimeoutError;