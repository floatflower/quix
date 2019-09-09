module.exports = (route) => {

    return `require('dotenv').config();\n` +
        `const chai = require('chai');\n` +
        `const chaiHttp = require('chai-http');\n` +
        `const should = chai.should();\n` +
        `const expect = chai.expect;\n` +
        `\n` +
        `const http = require('quix/http');\n` +
        `\n` +
        `chai.use(chaiHttp);\n` +
        `\n` +
        `beforeEach(function() {\n` +
        `    // do something beforeEach\n` +
        `});\n` +
        `\n` +
        `describe('Test route ${route}', () => {\n` +
        `\n` +
        `    // test case template.\n` +
        `    // it('description', (done) => {\n` +
        `    //    done();\n` +
        `    // })\n` +
        `\n` +
        `});`;

}