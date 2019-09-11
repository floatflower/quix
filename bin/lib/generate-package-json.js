const installDependencies = require('./install-dependencies');

module.exports = (packageData) => {

    if(typeof packageData === 'undefined') {
        packageData.scripts = {}
    }

    packageData.scripts['quix:server:start'] = 'node ./bin/www';
    packageData.scripts['quix:db:create'] = 'node ./bin/db-create';
    packageData.scripts['quix:db:drop'] = 'node ./bin/db-drop';
    packageData.scripts['quix:db:migration'] = 'knex migrate:latest';
    packageData.scripts['quix:db:seed'] = 'knex seed:run';
    packageData.scripts['test'] = 'npm run quix:test';
    packageData.scripts['quix:test'] = "mocha \'src/tests/{,!(helper)/**}/*.js\' --recursive --timeout 15000 --exit";

    packageData.scripts['quix:dependencies'] = installDependencies();
    packageData.scripts['quix:init'] = 'node ./node_modules/quix/bin/init.js';


    packageData.scripts['quix:create:dockerfile'] = 'node ./node_modules/quix/bin/dockerfile.js';
    packageData.scripts['quix:create:gitlab-ci'] = 'node ./node_modules/quix/bin/gitlab-ci.js';
    packageData.scripts['quix:create:knexfile'] = 'node ./node_modules/quix/bin/knexfile.js';
    packageData.scripts['quix:create:package.json'] = 'node ./node_modules/quix/bin/package.js';

    /**
     * Generate Template
     */
    packageData.scripts['quix:template:amqp-producer:wq'] = 'node ./node_modules/quix/bin/create-template/amqp-consumer-wq.js';
    packageData.scripts['quix:template:amqp-consumer:wq'] = 'node ./node_modules/quix/bin/create-template/amqp-consumer-wq.js';
    packageData.scripts['quix:template:amqp-producer:ps'] = 'node ./node_modules/quix/bin/create-template/amqp-producer-ps.js';
    packageData.scripts['quix:template:amqp-consumer:ps'] = 'node ./node_modules/quix/bin/create-template/amqp-consumer-ps.js';
    packageData.scripts['quix:template:socket-io-handler'] = 'node ./node_modules/quix/bin/create-template/socket-io-handler.js';
    packageData.scripts['quix:template:socket-io-authenticator'] = 'node ./node_modules/quix/bin/create-template/socket-io-authenticator.js';
    packageData.scripts['quix:template:event-handler'] = 'node ./node_modules/quix/bin/create-template/event-handler.js';
    packageData.scripts['quix:template:repository'] = 'node ./node_modules/quix/bin/create-template/repository.js';
    packageData.scripts['quix:template:route'] = 'node ./node_modules/quix/bin/create-template/route.js';
    packageData.scripts['quix:template:create-table'] = 'node ./node_modules/quix/bin/create-template/create-table.js';
    packageData.scripts['quix:template:seeder'] = 'node ./node_modules/quix/bin/create-template/seeder.js';

    if(typeof packageData.quix === 'undefined') {
        packageData.quix = {};
    }
    packageData.main = 'src/app.js';

    return packageData;
};