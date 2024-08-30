import { z } from 'zod'
import { filmValidator } from '../zod/filmValidator'

export type Film = z.infer<typeof filmValidator>
