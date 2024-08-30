import { z } from 'zod'
import { planetValidator } from '../zod/planetValidator'

export type Planet = z.infer<typeof planetValidator>
