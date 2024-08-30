import { z } from 'zod'
import { speciesValidator } from '../zod/speciesValidator'

export type Species = z.infer<typeof speciesValidator>
