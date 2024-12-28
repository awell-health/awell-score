import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import R from 'ramda'

import CalculationsService from '../../shared/services/calculations.service'
import { Logger } from '../../shared/services/logger.service'
import {
  cast_incoming_calculation_input_to_exact_types,
  transform_calculations_for_api_response,
  transform_single_calculation_for_api_response,
} from '../../shared/utils'
import { insert_calculation_result } from '../methods/calculation_result'

const get_public_calculations = async (req: Request, res: Response) => {
  try {
    const calculations = CalculationsService.get_public_calculations()

    res
      .status(StatusCodes.OK)
      .send(transform_calculations_for_api_response(calculations))
  } catch (err: unknown) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })

    Logger.error('Error while getting the calculations', {
      error: err,
    })
  }
}

const get_calculation = async (req: Request, res: Response) => {
  const { calculation_id } = req.params

  try {
    const requested_calculation =
      CalculationsService.get_calculation(calculation_id)

    if (R.isNil(requested_calculation)) {
      res.status(StatusCodes.NOT_FOUND).send({
        error: {
          message: `Calculation with id "${calculation_id}" could not be found.`,
        },
      })
      return
    }

    // Then it's a new calculation
    if ('inputSchema' in requested_calculation) {
      res.status(StatusCodes.OK).send(requested_calculation)
      return
    }

    res.status(StatusCodes.OK).send(
      transform_single_calculation_for_api_response({
        calculation_id,
        calculation: requested_calculation,
      })
    )
  } catch (err: unknown) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })

    Logger.error(err)
  }
}

const search_calculation = async (req: Request, res: Response) => {
  const { calculation_name } = req.query

  if (typeof calculation_name !== 'string') {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send(
        'Invalid search query. Please make sure you pass the correct query parameter.'
      )
    Logger.error('Invalid search query passed.', {
      error: { message: `Invalid search query passed.` },
    })

    return
  }

  try {
    const matched_calculations = CalculationsService.search_calculation(
      calculation_name.toString()
    )

    res
      .status(StatusCodes.OK)
      .send(transform_calculations_for_api_response(matched_calculations))
  } catch (err: unknown) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })

    Logger.error('Something went wrong while searching for a calculation', {
      error: { err },
    })
  }
}

const execute_calculation = async (req: Request, res: Response) => {
  const { calculation_id } = req.body

  const { calculation_input } = req.body

  const { meta_data } = req.body

  try {
    const requested_calculation =
      CalculationsService.get_calculation(calculation_id)

    if (R.isNil(requested_calculation)) {
      res.status(StatusCodes.NOT_FOUND).send({
        error: {
          message: `Calculation with id "${calculation_id}" could not be found.`,
        },
      })
      return
    }

    if ('inputSchema' in requested_calculation) {
      return
    }

    const casted_calculation_input =
      cast_incoming_calculation_input_to_exact_types({
        calculation: requested_calculation,
        calculation_input,
      })

    const results = CalculationsService.calculate({
      calculation: requested_calculation,
      calculation_id,
      calculation_input: casted_calculation_input,
    })

    res.status(StatusCodes.OK).send(results)
    insert_calculation_result({
      calculation_id,
      calculation_input,
      results,
      meta_data,
    })
  } catch (err: unknown) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })

    Logger.error(`${calculation_id} could not be calculated`, {
      request_body: {
        ...req.body,
      },
      error: { err },
    })
  }
}

const simulate_calculation = async (req: Request, res: Response) => {
  const { calculation_id } = req.params

  try {
    const requested_calculation =
      CalculationsService.get_calculation(calculation_id)

    if (R.isNil(requested_calculation)) {
      res.status(StatusCodes.NOT_FOUND).send({
        error: {
          message: `Calculation with id "${calculation_id}" could not be found.`,
        },
      })
      return
    }

    if ('inputSchema' in requested_calculation) {
      return
    }

    const simulation = CalculationsService.simulate({
      calculation: requested_calculation,
      calculation_id,
    })
    res.status(StatusCodes.OK).send(simulation)
  } catch (err: unknown) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })

    Logger.error(`${calculation_id} could not be simulated`, {
      error: { err },
    })
  }
}

export default {
  get_public_calculations,
  get_calculation,
  search_calculation,
  execute_calculation,
  simulate_calculation,
}
