import { z } from 'zod'
import { numericStringValidator } from './numericStringValidator'

export const planetValidator = z.object({
  climate: z.string(),
  created: z.string().datetime(),
  diameter: numericStringValidator,
  edited: z.string().datetime(),
  films: z.array(z.string().url()),
  gravity: z.string(),
  name: z.string(),
  orbital_period: numericStringValidator,
  population: numericStringValidator,
  residents: z.array(z.string().url()),
  rotation_period: numericStringValidator,
  surface_water: numericStringValidator,
  terrain: z.string(),
  url: z.string().url()
})
