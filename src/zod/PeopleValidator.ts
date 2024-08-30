import { z } from 'zod'
import { apiUrlValidator } from './apiUrlValidator'
import { genderValidator } from './genderValidator'
import { numericStringValidator } from './numericStringValidator'

export const peopleValidator = z.object({
  birth_year: z.string(),
  created: z.string().datetime(),
  edited: z.string().datetime(),
  eye_color: z.string(),
  films: apiUrlValidator.array(),
  gender: genderValidator,
  hair_color: z.string(),
  height: numericStringValidator,
  homeworld: apiUrlValidator,
  mass: numericStringValidator,
  name: z.string(),
  skin_color: z.string(),
  species: apiUrlValidator.array(),
  starships: apiUrlValidator.array(),
  url: apiUrlValidator,
  vehicles: apiUrlValidator.array()
})
