const HTTPError = require('./http-error');

class UnsupportedMediaTypeError extends HTTPError
{
    constructor(code, message = '') {
        super(415, code, message);
    }
}

module.exports = UnsupportedMediaTypeError;