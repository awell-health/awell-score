import express from 'express'

import calculationsController from '../controllers/calculations.controller'

const calculations_router = express.Router()

/**
 * Get all calculations that are public
 */
calculations_router.get('/', calculationsController.get_public_calculations)

/**
 * Search calculations based on calculation name
 */
calculations_router.get('/search', calculationsController.search_calculation)

/**
 * Get a specific calculation
 */
calculations_router.get(
  '/:calculation_id',
  calculationsController.get_calculation
)

/**
 * Execute a calculation
 */
calculations_router.post('/', calculationsController.execute_calculation)

/**
 * Simulate a calculation
 */
calculations_router.get(
  '/simulate/:calculation_id',
  calculationsController.simulate_calculation
)

export default calculations_router
