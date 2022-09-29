/**
 * Requiring `winston-mongodb` will expose
 * `winston.transports.MongoDB`
 */
import 'winston-mongodb'

import appRoot from 'app-root-path'
import dotenv from 'dotenv'
import expressWinston from 'express-winston'
import winston from 'winston'

dotenv.config()

const { CALCULATIONS_MONGO_URL = '' } = process.env

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/request_logs.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: winston.format.combine(winston.format.json()),
  },
  mongodb: {
    name: 'calculation-suite-request-logger',
    level: 'info',
    db: CALCULATIONS_MONGO_URL,
    collection: 'request_logs',
    metaKey: 'meta',
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,

    format: winston.format.cli(),
  },
}

const request_logger = expressWinston.logger({
  transports: [
    new winston.transports.File(options.file),

    new winston.transports.MongoDB(options.mongodb),
    new winston.transports.Console(options.console),
  ],
  meta: true,
  /**
   * A list of request parameters that should be logged
   */
  requestWhitelist: [
    'url',
    'ip',
    'hostname',
    'socket',
    'origin',
    'headers',
    'method',
    'httpVersion',
    'originalUrl',
    'query',
    'body',
  ],
  /**
   * A list of response parameters that should be logged
   */
  responseWhitelist: ['statusCode', 'body', 'headers'],
})

export { request_logger }
