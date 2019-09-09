const HTTPError = require('./http-error');

class GoneError extends HTTPError
{
    constructor(code, message = '') {
        super(410, code, message);
    }
}

module.exports = GoneError;