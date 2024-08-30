import { z } from 'zod'
import { ApiUrlValidator } from './ApiUrlValidator'
import { GenderValidator } from './GenderValidator'

export const PeopleValidator = z.object({
  name: z.string(),
  height: z.string().regex(/^\d+$/),
  mass: z.string().regex(/^\d+$/),
  hair_color: z.string(),
  skin_color: z.string(),
  eye_color: z.string(),
  birth_year: z.string(),
  gender: GenderValidator,
  homeworld: ApiUrlValidator,
  films: ApiUrlValidator.array(),
  species: ApiUrlValidator.array(),
  vehicles: ApiUrlValidator.array(),
  starships: ApiUrlValidator.array(),
  created: z.string().datetime(),
  edited: z.string().datetime(),
  url: ApiUrlValidator,
})
