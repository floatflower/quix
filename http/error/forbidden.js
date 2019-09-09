const HTTPError = require('./http-error');

class ForbiddenError extends HTTPError
{
    constructor(code, message = '') {
        super(403, code, message);
    }
}

module.exports = ForbiddenError;