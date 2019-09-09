const HTTPError = require('./http-error');

class UnavailableForLegalReasonsError extends HTTPError
{
    constructor(code, message = '') {
        super(451, code, message);
    }
}

module.exports = UnavailableForLegalReasonsError;