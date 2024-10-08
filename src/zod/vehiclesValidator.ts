import { z } from 'zod'
import { numericStringValidator } from './numericStringValidator'

export const vehicleValidator = z.object({
  cargo_capacity: numericStringValidator,
  consumables: z.string(),
  cost_in_credits: numericStringValidator,
  created: z.string().datetime(),
  crew: numericStringValidator,
  edited: z.string().datetime(),
  films: z.array(z.string().url()),
  length: numericStringValidator,
  manufacturer: z.string(),
  max_atmosphering_speed: numericStringValidator,
  model: z.string(),
  name: z.string(),
  passengers: numericStringValidator,
  pilots: z.array(z.string().url()),
  url: z.string().url(),
  vehicle_class: z.string()
})
