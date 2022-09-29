/**
 * Requiring `winston-mongodb` will expose
 * `winston.transports.MongoDB`
 */
import 'winston-mongodb'

import appRoot from 'app-root-path'
import dotenv from 'dotenv'
import winston from 'winston'

dotenv.config()

const { CALCULATIONS_MONGO_URL = '' } = process.env

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/logs.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  mongodb: {
    name: 'calculation-suite-logger',
    level: 'info',
    db: CALCULATIONS_MONGO_URL,
    collection: 'logs',
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,

    format: winston.format.cli(),
  },
}

const Logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),

    winston.format.metadata({
      fillExcept: ['message', 'level', 'timestamp', 'label'],
    }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File(options.file),

    new winston.transports.MongoDB(options.mongodb),
    new winston.transports.Console(options.console),
  ],
})

export { Logger }
