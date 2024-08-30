import { z } from 'zod'
import { numericStringValidator } from './numericStringValidator'

export const vehicleValidator = z.object({
  name: z.string(),
  films: z.array(z.string().url()),
  created: z.string().datetime(),
  edited: z.string().datetime(),
  url: z.string().url(),
  pilots: z.array(z.string().url()),
  model: z.string(),
  manufacturer: z.string(),
  cost_in_credits: numericStringValidator,
  length: numericStringValidator,
  max_atmosphering_speed: numericStringValidator,
  crew: numericStringValidator,
  passengers: numericStringValidator,
  cargo_capacity: numericStringValidator,
  consumables: z.string(),
  vehicle_class: z.string()
})
