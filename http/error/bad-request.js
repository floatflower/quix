const HTTPError = require('./http-error');

class BadRequestError extends HTTPError
{
    constructor(code, message = '') {
        super(400, code, message);
    }
}

module.exports = BadRequestError;