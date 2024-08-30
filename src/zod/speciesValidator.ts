import { z } from 'zod'
import { numericStringValidator } from './numericStringValidator'

export const speciesValidator = z.object({
  name: z.string(),
  films: z.array(z.string().url()),
  created: z.string().datetime(),
  edited: z.string().datetime(),
  url: z.string().url(),
  classification: z.string(),
  designation: z.string(),
  average_height: numericStringValidator,
  skin_colors: z.string(),
  hair_colors: z.string(),
  eye_colors: z.string(),
  average_lifespan: numericStringValidator,
  homeworld: z.string().url().nullable(),
  language: z.string(),
  people: z.array(z.string().url())
})
