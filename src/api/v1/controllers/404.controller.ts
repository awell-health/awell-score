import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { Logger } from '../../shared/services/logger.service'

export const not_found = (req: Request, res: Response) => {
  const message = `${req.method} ${req.originalUrl} endpoint does not exist.`

  res.status(StatusCodes.NOT_FOUND).send(message)
  Logger.error(message)
}
