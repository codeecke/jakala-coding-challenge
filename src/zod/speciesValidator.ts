import { z } from 'zod'
import { numericStringValidator } from './numericStringValidator'

export const speciesValidator = z.object({
  average_height: numericStringValidator,
  average_lifespan: numericStringValidator,
  classification: z.string(),
  created: z.string().datetime(),
  designation: z.string(),
  edited: z.string().datetime(),
  eye_colors: z.string(),
  films: z.array(z.string().url()),
  hair_colors: z.string(),
  homeworld: z.string().url().nullable(),
  language: z.string(),
  name: z.string(),
  people: z.array(z.string().url()),
  skin_colors: z.string(),
  url: z.string().url()
})
