type OutputType = {
  symptom: string
  dimension: string
}

export const extract_symptom_and_dimension_from_input = (
  input_id: string
): OutputType => {
  if (!/[a-z]*_([0-9]*|other)(_[a-z]*){2,}$/.test(input_id)) {
    throw new Error(
      `input_id ${input_id} does not follow expected format (i.e. <STRING>_<NUMBER>_<SYMPTOM_NAME>_<DIMENSION>)`
    )
  }

  const [dimension] = input_id.match(/(?<=_)[a-z]*$/) || ''
  const symptom = input_id
    .replace(/^[a-z]*_([0-9]*|other)_/, '')
    .replace(/_[a-z]*$/, '')
  return {
    symptom,
    dimension,
  }
}
