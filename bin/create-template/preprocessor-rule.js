const Inputter = require('inputter');
const generatePreprocessorRule = require('../lib/template/preprocessor-rule');
const dashToCamelCase = require('../lib/dash-to-camel-case');

const createFile = require('../lib/create-file');


let lengthValidator = {
    validate: (data) => {
        return data.length >= 0;
    },
    message: 'You should input the rule name.'
};

let ruleNameRegExpValidator = {
    validate: (data) => {
        return data.match(/^([a-zA-Z0-9]+[\-]?[a-zA-Z0-9]+)+$/);
    },
    message: 'You should input the valid format of rule name: (rule-name)'
};


let inputter = new Inputter();

inputter
    .hint('Input the rule name: (rule-name)')
    .input([lengthValidator, ruleNameRegExpValidator])
    .end()
    .then((data) => {
        let ruleName = data[0];

        createFile(
            `src/preprocessor-rule/${ruleName}.js`,
            generatePreprocessorRule(dashToCamelCase(ruleName), ruleName),
            false
        );

    });