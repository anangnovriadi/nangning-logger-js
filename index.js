"use strict";

const winston = require('winston');
const { format, transports } = require('winston');
const { timestamp, label } = format;    

const loggerResponse = winston.createLogger({
    transports: [
        new transports.Console({
            format: winston.format.combine(
                label({ label: '#################### Response ###################' }),
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.prettyPrint(),
            )
        })
    ]
});

const loggerRequest = winston.createLogger({
    transports: [
        new transports.Console({
            format: winston.format.combine(
                label({ label: '#################### Request ###################' }),
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.prettyPrint(),
            )
        })
    ]
});

module.exports = { loggerResponse, loggerRequest };