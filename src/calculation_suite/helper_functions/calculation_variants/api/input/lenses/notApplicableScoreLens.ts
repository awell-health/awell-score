import R from 'ramda'

import { Path as notApplicableIfPath } from './notApplicableIfLens'

export const Path = [...notApplicableIfPath, 'not_applicable_score']


export const notApplicableScoreLens = R.lensPath(Path)
