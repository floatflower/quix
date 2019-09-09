const HTTPError = require('./http-error');

class ConflictError extends HTTPError
{
    constructor(code, message = '') {
        super(409, code, message);
    }
}

module.exports = ConflictError;