import { z } from 'zod'
import { PeopleValidator } from '../zod/PeopleValidator'

export type People = z.infer<typeof PeopleValidator>
