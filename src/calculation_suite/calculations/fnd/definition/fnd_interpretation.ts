type DepedenceLevelType =
  | 'Low depedence'
  | 'Low to moderate dependence'
  | 'Moderate dependence'
  | 'High dependence'

export const FND_INTERPRATION_TABLE: Record<string, DepedenceLevelType> = {
  '0': 'Low depedence',
  '1': 'Low depedence',
  '2': 'Low depedence',
  '3': 'Low to moderate dependence',
  '4': 'Low to moderate dependence',
  '5': 'Moderate dependence',
  '6': 'Moderate dependence',
  '7': 'Moderate dependence',
  '8': 'High dependence',
  '9': 'High dependence',
  '10': 'High dependence',
}
