const HTTPError = require('./http-error');

class URITooLongError extends HTTPError
{
    constructor(code, message = '') {
        super(414, code, message);
    }
}

module.exports = URITooLongError;