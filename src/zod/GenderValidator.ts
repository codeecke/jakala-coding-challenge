import { z } from 'zod'

export const genderValidator = z.union([
  z.literal('male'),
  z.literal('female'),
  z.literal('hermaphrodite'),
  z.literal('none'),
  z.literal('n/a'),
])
