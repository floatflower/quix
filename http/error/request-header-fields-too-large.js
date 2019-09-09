const HTTPError = require('./http-error');

class RequestHeaderFieldsTooLargeError extends HTTPError
{
    constructor(code, message = '') {
        super(431, code, message);
    }
}

module.exports = BadRequestError;