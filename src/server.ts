import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'

import { request_logger } from './api/shared/middleware/request_logger'
import { Logger } from './api/shared/services/logger.service'
import { not_found } from './api/v1/controllers/404.controller'
import { swaggerDefinition } from './api/v1/docs/swagger'
import calculations_router from './api/v1/routes/calculations.routes'
import health_router from './api/v1/routes/health.routes'
import calculations_router_v2 from './api/v2/routes/calculations.routes'

/**
 * Will read the .env file, parse the contents, assign it to process.env,
 * and return an Object with a parsed key containing the loaded content
 * or an error key if it failed.
 */
dotenv.config()

const { PORT = '', CALCULATIONS_MONGO_URL = '' } = process.env

mongoose
  .connect(CALCULATIONS_MONGO_URL)
  .then(() => {
    Logger.info(`DB connection to "${CALCULATIONS_MONGO_URL}" successful!`)

    const app = express()

    /**
     * Middleware:
     * --------------
     * Middleware functions are functions that have access to the request object (req), the response object (res),
     * and the next middleware function in the application’s request-response cycle. The next middleware function is
     * commonly denoted by a variable named next.
     *
     * - cors is a middleware that can be used to enable CORS with various options
     * - express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
     * - express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays.
     * - Request logger (express-winston)
     */
    app.use(cors())
    app.use(express.json())

    app.use(express.urlencoded({ extended: true }))
    app.use(request_logger)

    /**
     * SwaggerJSDoc route
     */
    const options = {
      explorer: false,
    }

    app.use(
      '/v1/docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDefinition, options)
    )

    /**
     * Routes v1
     */
    app.use('', health_router)
    app.use('/v1/calculations', calculations_router)
    app.use('/calculations', calculations_router) // Set the default version to latest.

    /**
     * Routes v2
     */
    app.use('/v2/calculations', calculations_router_v2)

    /**
     * 404 route
     */
    app.use(not_found)

    /**
     * Start the server
     */
    app.listen(PORT, () => {
      Logger.info(`Server running and available on http://localhost:${PORT}`)
    })
  })
  .catch((err: unknown) => {
    Logger.error(err)
  })
