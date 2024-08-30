import { z } from 'zod'
import { numericStringValidator } from './numericStringValidator'

export const starshipValidator = z.object({
  cargo_capacity: numericStringValidator,
  consumables: z.string(),
  cost_in_credits: numericStringValidator,
  created: z.string().datetime(),
  crew: z.string(),
  edited: z.string().datetime(),
  films: z.array(z.string().url()),
  hyperdrive_rating: numericStringValidator,
  length: numericStringValidator,
  manufacturer: z.string(),
  max_atmosphering_speed: z.string(),
  MGLT: numericStringValidator,
  model: z.string(),
  name: z.string(),
  passengers: numericStringValidator,
  pilots: z.array(z.string().url()),
  starship_class: z.string(),
  url: z.string().url()
})
