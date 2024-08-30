import { z } from 'zod'
import { apiUrlValidator } from './apiUrlValidator'
import { genderValidator } from './genderValidator'
import { numericStringValidator } from './numericStringValidator'

export const peopleValidator = z.object({
  name: z.string(),
  height: numericStringValidator,
  mass: numericStringValidator,
  hair_color: z.string(),
  skin_color: z.string(),
  eye_color: z.string(),
  birth_year: z.string(),
  gender: genderValidator,
  homeworld: apiUrlValidator,
  films: apiUrlValidator.array(),
  species: apiUrlValidator.array(),
  vehicles: apiUrlValidator.array(),
  starships: apiUrlValidator.array(),
  created: z.string().datetime(),
  edited: z.string().datetime(),
  url: apiUrlValidator
})
