require('dotenv').config();
const app = require('../src/app');

app.listen(parseInt(process.env.APP_PORT) || 3000);