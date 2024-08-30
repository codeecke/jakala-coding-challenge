import { z } from 'zod'
import { starshipValidator } from '../zod/starshipValidator'

export type Starship = z.infer<typeof starshipValidator>
