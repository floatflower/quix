const HTTPError = require('./http-error');

class MethodNotAllowError extends HTTPError
{
    constructor(code, message = '') {
        super(405, code, message);
    }
}

module.exports = MethodNotAllowError;