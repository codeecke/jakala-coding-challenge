import { z } from 'zod'

export const filmValidator = z.object({
  characters: z.array(z.string().url()),
  created: z.string().datetime(),
  director: z.string(),
  edited: z.string().datetime(),
  episode_id: z.number(),
  opening_crawl: z.string(),
  planets: z.array(z.string().url()),
  producer: z.string(),
  release_date: z.string(),
  species: z.array(z.string().url()),
  starships: z.array(z.string().url()),
  title: z.string(),
  url: z.string().url(),
  vehicles: z.array(z.string().url())
})
