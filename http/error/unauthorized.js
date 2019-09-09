const HTTPError = require('./http-error');

class UnauthorizedError extends HTTPError
{
    constructor(code, message = '') {
        super(401, code, message);
    }
}

module.exports = UnauthorizedError;