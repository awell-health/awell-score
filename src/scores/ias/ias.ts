import { ScoreType } from '../../types'
import { IAS_OUTPUT, IAS_INPUTS, IAS_SUBSCALES } from './definition'
import { sum, pick } from 'lodash'

export const ias: ScoreType<typeof IAS_INPUTS, typeof IAS_OUTPUT> = {
  name: 'Ilness Attitude Scale (IAS)',
  readmeLocation: __dirname,
  inputSchema: IAS_INPUTS,
  outputSchema: IAS_OUTPUT,
  calculate: ({ data }) => {
    const health_anxiety_inputs = pick(data, IAS_SUBSCALES.HEALTH_ANXIETY)
    const ilness_behaviour_inputs = pick(data, IAS_SUBSCALES.ILNESS_BEHAVIOUR)

    return {
      HEALTH_ANXIETY: sum(Object.values(health_anxiety_inputs)),
      ILNESS_BEHAVIOUR: sum(Object.values(ilness_behaviour_inputs)),
    }
  },
}
