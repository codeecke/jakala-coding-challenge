import { z } from 'zod'

export const GenderValidator = z.union([
  z.literal('male'),
  z.literal('female'),
  z.literal('n/a')
])
