import { z } from 'zod'

export const ApiUrlValidator = z
  .string()
  .url()
  .regex(/\/\d+\/$/)
