export const generate_random_number_based_on_range = (
  min: number,
  max: number
): number => Math.floor(Math.random() * (max - min + 1) + min)
