import { z } from 'zod'
import { vehicleValidator } from '../zod/vehiclesValidator'

export type Vehicle = z.infer<typeof vehicleValidator>
