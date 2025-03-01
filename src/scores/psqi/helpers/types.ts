import { z } from 'zod'
import { PSQI_INPUT } from '../definition'

export type Data = z.infer<
  z.ZodObject<{
    [K in keyof typeof PSQI_INPUT]: (typeof PSQI_INPUT)[K]['type']
  }>
>
