module.exports = (method, route) => {

    return `const express = require('express');\n` +
        `const router = express.Router();\n` +
        `\n` +
        `const http = require('quix/http');\n` +
        `\n` +
        `// Uncomment when need to use http error.\n` +
        `// const httpError = require('quix/http/error');\n` +
        `\n` +
        `router.${method}('${route}', (req, res, next) => {\n` +
        `\n` +
        `    // do something with this route.\n` +
        `\n` +
        `    res.status(http.status.OK).send("Response from ${route}");\n` +
        `});\n` +
        `\n` +
        `module.exports = router;`;

};