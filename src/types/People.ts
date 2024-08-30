import { z } from 'zod'
import { peopleValidator } from '../zod/peopleValidator'

export type People = z.infer<typeof peopleValidator>
