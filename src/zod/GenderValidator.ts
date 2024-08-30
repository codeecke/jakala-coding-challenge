import { z } from 'zod'

export const genderValidator = z.union([
  z.literal('female'),
  z.literal('hermaphrodite'),
  z.literal('male'),
  z.literal('n/a'),
  z.literal('none')
])
