const HTTPError = require('./http-error');

class PreconditionRequired extends HTTPError
{
    constructor(code, message = '') {
        super(428, code, message);
    }
}

module.exports = PreconditionRequired;