import { ApiUrl } from '../types'
import { ApiUrlValidator } from '../zod/ApiUrlValidator'

export const getIdFromApiUrl = (url: ApiUrl): number | null => {
  if (!ApiUrlValidator.safeParse(url)) throw new Error('invalid url')
  const match = url.match(/\/(\d+)\/$/)
  if (!match) return null
  return parseInt(match[1])
}
