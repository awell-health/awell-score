import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import R from 'ramda'

import CalculationsService from '../../shared/services/calculations.service'
import { Logger } from '../../shared/services/logger.service'
import { cast_incoming_calculation_input_to_exact_types } from '../../shared/utils'
import {
  find_calculation_result,
  insert_calculation_result,
} from '../methods/calculation_result'

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

    if (!('calculation_name' in requested_calculation)) {
      res.status(StatusCodes.BAD_REQUEST).send({
        error: {
          message: `Awaiting update to v3`,
        },
      })
      return
    }

    /**
     * Clincal App Support:
     * The Awell Score API is strictly typed in terms of the inputs it can receive for a calculation.
     * Unfortunately the CA has inconsistent types and in order to avoid major rework of the CA,
     * we decided to be more opportunistic in the Awell Score app.
     *
     * Based on the calculation definition and the input sent to the API
     * we'll try to cast the input to the valid input type.
     * Eg: "2" (string) => 2 (number)
     */
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

    const storedCalculationResult = await insert_calculation_result({
      calculation_id,
      calculation_input,
      results,
      meta_data,
    })

    res.status(StatusCodes.OK).send({
      id: storedCalculationResult._id,
      calculation_id: storedCalculationResult.calculation_id,
      timestamp: storedCalculationResult.created_at,
      calculation_input: storedCalculationResult.calculation_input,
      results: storedCalculationResult.results,
      meta: storedCalculationResult.meta_data,
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

const get_calculation_result = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const calculationResult = await find_calculation_result(id)

    if (calculationResult) {
      res.status(StatusCodes.OK).send({
        id: calculationResult._id,
        calculation_id: calculationResult.calculation_id,
        timestamp: calculationResult.created_at,
        calculation_input: calculationResult.calculation_input,
        results: calculationResult.results,
        meta_data: calculationResult.meta_data,
      })
    }
    res.status(StatusCodes.NOT_FOUND).send({
      error: {
        message: `No results found for id ${id}`,
      },
    })
  } catch (err: unknown) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ err })

    Logger.error(`No calculation results could be retrieved for id ${id}`, {
      error: { err },
    })
  }
}

export default {
  execute_calculation,
  get_calculation_result,
}
