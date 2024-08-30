import { z } from 'zod'
import { vehiclesValidator } from '../zod/vehiclesValidator'

export type Vehicle = z.infer<typeof vehiclesValidator>
