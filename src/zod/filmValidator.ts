import { z } from 'zod'

export const filmValidator = z.object({
  title: z.string(),
  created: z.string().datetime(),
  edited: z.string().datetime(),
  url: z.string().url(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  director: z.string(),
  producer: z.string(),
  release_date: z.string(),
  characters: z.array(z.string().url()),
  planets: z.array(z.string().url()),
  starships: z.array(z.string().url()),
  vehicles: z.array(z.string().url()),
  species: z.array(z.string().url())
})
