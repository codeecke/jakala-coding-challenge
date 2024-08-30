import { z } from 'zod'
import { ApiUrlValidator } from '../zod/ApiUrlValidator'

export type ApiUrl = z.infer<typeof ApiUrlValidator>
