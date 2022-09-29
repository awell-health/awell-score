import R from 'ramda'

export const Path = ['input_type', 'allowed_answers']


export const allowedAnswersLens = R.lensPath(Path)
