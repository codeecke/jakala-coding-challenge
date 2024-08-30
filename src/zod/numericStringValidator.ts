import { z } from 'zod'

// In a real scenario, I would have a serious word with the 
// backend developer if I received an API like that from him.

export const numericStringValidator = z
  .string()
  
  // yes, there are numbers ending with a space
  .regex(/^[\d\.\s,]+$/)

  // why 4 states for the same thing?
  .or(z.literal('unknown'))
  .or(z.literal('n/a'))
  .or(z.literal('indefinite'))
  .or(z.literal('none'))


// Sorry for the comments, I had to get that off my chest.