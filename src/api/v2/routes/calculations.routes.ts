import express from 'express'

import calculationsController from '../controllers/calculations.controller'

const calculations_router_v2 = express.Router()

/**
 * Perform calculation
 */
calculations_router_v2.post('/', calculationsController.execute_calculation)

/**
 * Retrieve calculation result
 */
calculations_router_v2.get(
  '/result/:id',
  calculationsController.get_calculation_result
)

export default calculations_router_v2
