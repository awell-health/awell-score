import R from 'ramda'

import { Path as notApplicableIfPath } from './notApplicableIfLens'

export const Path = [...notApplicableIfPath, 'input']


export const notApplicableInputLens = R.lensPath(Path)
