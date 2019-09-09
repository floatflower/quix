const HTTPError = require('./http-error');

class UpgradeRequiredError extends HTTPError
{
    constructor(code, message = '') {
        super(426, code, message);
    }
}

module.exports = UpgradeRequiredError;