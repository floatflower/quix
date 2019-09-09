const HTTPError = require('./http-error');

class PreconditionFailedError extends HTTPError
{
    constructor(code, message = '') {
        super(412, code, message);
    }
}

module.exports = PreconditionFailedError;