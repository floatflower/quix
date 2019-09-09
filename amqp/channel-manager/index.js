require('dotenv').config({path: `${__dirname}/../../../../.env`});
const colors = require('colors');
const amqp = require('amqplib');
const dh = require('../../data-handler');

function createConnection() {
    return new Promise((resolve, reject) => {
        if(dh.boolean(process.env.RABBITMQ_ENABLED)) {

            let url = '';

            if(dh.boolean(process.env.RABBITMQ_AUTH_ENABLED)
                && (!process.env.RABBITMQ_USERNAME || !process.env.RABBITMQ_PASSWORD)) {
                url = `amqp://${process.env.RABBITMQ_USERNAME}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`;
            } else {
                url = `amqp://${process.env.RABBITMQ_HOST}`;
            }

            amqp.connect(url, (errorConnection, connection) => {
                if (errorConnection) {
                    throw errorConnection;
                }

                resolve(connection);
            })

        }
    })
}

class AMQPChannelManager
{
    constructor() {
        this.channels = new Map();
    };

    requestChannel(key = 'default') {
        return new Promise((resolve) => {
            if(this.channels.has(key)) {
                resolve(this.channels.get(key));
            } else {
                createConnection().then((connection) => {
                    connection.createChannel((createChannelError, channel) => {

                        if (createChannelError) {
                            throw createChannelError;
                        }

                        this.channels.set(key, channel);
                        resolve(channel);
                    });
                });
            }
        })

    }
}

const amqpChannelManager = new AMQPChannelManager();

module.exports = amqpChannelManager;