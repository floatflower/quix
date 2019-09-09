class HTTPError extends Error {

    // in Quix, error code 10000 means unknown HTTP error.
    constructor(status, code = 10000, message = '') {
        super(message);
        this.code = code;
        this.status = status;
    }

}

module.exports = HTTPError;