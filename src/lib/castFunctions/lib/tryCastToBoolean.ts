export const tryCastToBoolean = (orginal_value: unknown): unknown => {
  if (typeof orginal_value === 'boolean') return orginal_value

  if (orginal_value === 'true' || orginal_value === 1 || orginal_value === '1')
    return true

  if (orginal_value === 'false' || orginal_value === 0 || orginal_value === '0')
    return false

  return orginal_value
}
