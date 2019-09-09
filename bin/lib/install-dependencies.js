module.exports = () => {
    let dependencies = [
        'amqplib',
        'bcrypt',
        'chai',
        'chai-http',
        'cookie-parser',
        'dotenv',
        'express',
        'jsonwebtoken',
        'knex',
        'mocha',
        'moment',
        'morgan',
        'mysql2',
        'pg',
        'sqlite3',
        'randomstring',
        'nodemailer',
        'qingcloud-sdk',
        '@google-cloud/storage',
        '@line/bot-sdk',
        'node-telegram-bot-api',
        'chai',
        'chai-http'
    ];

    return `npm install --save ` + dependencies.join(' ');
};