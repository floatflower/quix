const HTTPError = require('./http-error');

class FailedDependencyError extends HTTPError
{
    constructor(code, message = '') {
        super(424, code, message);
    }
}

module.exports = FailedDependencyError;