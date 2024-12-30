import { z } from 'zod'
import {
  type ScoreInputSchemaType,
  type ScoreOutputSchemaType,
  type ScoreType,
  type CalculateFn,
} from '../types'
import { createZodObjectFromSchema } from '../lib/createZodObjectFromInputSchema'
import { parseReadmeToHtml } from '../lib/parseReadmeToHtml'

export class Score<
  InputSchema extends ScoreInputSchemaType,
  OutputSchema extends ScoreOutputSchemaType,
> implements Omit<ScoreType<InputSchema, OutputSchema>, 'calculate'>
{
  name: string
  description: string
  readme_location: string
  inputSchema: InputSchema
  outputSchema: OutputSchema
  _calculate: CalculateFn<
    z.ZodObject<{ [K in keyof InputSchema]: InputSchema[K]['type'] }>,
    OutputSchema
  >['calculate']
  inputSchemaAsObject: z.ZodObject<{
    [K in keyof InputSchema]: InputSchema[K]['type']
  }>

  public constructor(
    score: ScoreType<InputSchema, OutputSchema> & {
      inputSchema: InputSchema
      outputSchema: OutputSchema
    },
  ) {
    this.name = score.name
    this.readme_location = score.readme_location
    this.description = parseReadmeToHtml(this.readme_location)
    this.inputSchema = score.inputSchema
    this.outputSchema = score.outputSchema
    this._calculate = score.calculate
    this.inputSchemaAsObject = createZodObjectFromSchema(this.inputSchema)
  }

  calculate(opts: {
    payload: unknown
  }): Record<
    keyof OutputSchema,
    z.infer<OutputSchema[keyof OutputSchema]['type']> | null
  > {
    const parsedData = this.inputSchemaAsObject.parse(opts.payload)

    return this._calculate({
      data: parsedData,
    })
  }
}
