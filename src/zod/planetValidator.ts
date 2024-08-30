import { z } from 'zod'
import { numericStringValidator } from './numericStringValidator'

export const planetValidator = z.object({
  name: z.string(),
  rotation_period: numericStringValidator,
  orbital_period: numericStringValidator,
  diameter: numericStringValidator,
  climate: z.string(),
  gravity: z.string(),
  terrain: z.string(),
  surface_water: numericStringValidator,
  population: numericStringValidator,
  residents: z.array(z.string().url()),
  films: z.array(z.string().url()),
  created: z.string().datetime(),
  edited: z.string().datetime(),
  url: z.string().url()
})
