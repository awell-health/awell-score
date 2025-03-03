import { ScoreType } from '../../types'
import {
  MPI_INPUTS,
  MPI_OUTPUT,
  MPI_DOMAINS,
  type DomainType,
} from './definition'
import { pick, sum } from 'lodash'

export const mpi: ScoreType<typeof MPI_INPUTS, typeof MPI_OUTPUT> = {
  name: 'Multidimensional Pain Inventory (MPI)',
  readmeLocation: __dirname,
  inputSchema: MPI_INPUTS,
  outputSchema: MPI_OUTPUT,
  calculate: ({ data }) => {
    const calculateDomainScore = (domain: DomainType) => {
      const inputs = pick(data, MPI_DOMAINS[domain])

      return sum(Object.values(inputs))
    }

    const mpiPsychosocial = calculateDomainScore('MPI_PSYCHOSOCIAL')
    const mpiBehaviour = calculateDomainScore('MPI_BEHAVIOUR')
    const mpiAdl = calculateDomainScore('MPI_ADL')

    return {
      MPI_TOTAL: mpiPsychosocial + mpiBehaviour + mpiAdl,
      MPI_PSYCHOSOCIAL: mpiPsychosocial,
      MPI_BEHAVIOUR: mpiBehaviour,
      MPI_ADL: mpiAdl,
    }
  },
}
