import mongoose, { Document, Model, model } from 'mongoose'
import { ApiCalculationResultsType } from '../../../types/api.types'
import { type IncomingCalculationInputType } from '../../../types/calculations.types'
const { Schema } = mongoose

export type ICalculationResult = {
  calculation_id: string
  calculation_input: IncomingCalculationInputType
  results: ApiCalculationResultsType
  meta_data: { [key in string]: unknown }
  created_at: Date
} & Document

const schema = new Schema<ICalculationResult>(
  {
    calculation_id: String,
    calculation_input: {},
    results: [{}],
    meta_data: {},
  },
  { timestamps: { createdAt: 'created_at' } }
)

export const CalculationResult: Model<ICalculationResult> = model(
  'CalculationResult',
  schema
)
