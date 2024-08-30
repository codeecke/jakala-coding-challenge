import { z } from 'zod'
import { apiUrlValidator } from '../zod/apiUrlValidator'

export type ApiUrl = z.infer<typeof apiUrlValidator>
