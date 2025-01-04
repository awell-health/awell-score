import { sample } from 'lodash'

export const simulateStringInput = (): string => {
  const DEFAULT_SIMULATION = [
    'Toby the turtle tried tap-dancing',
    'Tina talks to tulips, thinking they’re turtles',
    'Timmy turtle wears tiny top hats',
    'Tabitha turtle tutors in turtle trigonometry',
    'Tony’s turtle told tall tales',
  ] as const

  return sample(DEFAULT_SIMULATION)
}
