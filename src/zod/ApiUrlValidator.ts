import { z } from 'zod'

export const apiUrlValidator = z
  .string()
  .url()
  .regex(/\/\d+\/$/)
