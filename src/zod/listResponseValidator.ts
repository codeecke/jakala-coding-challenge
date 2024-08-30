import { z, ZodSchema } from 'zod'
import { filmValidator } from './filmValidator'
import { peopleValidator } from './peopleValidator'
import { planetValidator } from './planetValidator'
import { speciesValidator } from './speciesValidator'
import { vehiclesValidator } from './vehiclesValidator'

const generateReponseValidator = (itemValidator: ZodSchema) => {
  return z.object({
    count: z.number(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(itemValidator)
  })
}

export const peopleListResponseValidator =
  generateReponseValidator(peopleValidator)

export const planetListResponseValidator =
  generateReponseValidator(planetValidator)

export const filmListResponseValidator = generateReponseValidator(filmValidator)
export const speciesListResponseValidator =
  generateReponseValidator(speciesValidator)
export const vehiclesListResponseValidator =
  generateReponseValidator(vehiclesValidator)
