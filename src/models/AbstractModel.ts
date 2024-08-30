import { ApiUrl } from '../types'
import { apiUrlValidator } from '../zod/apiUrlValidator'

export abstract class AbstractModel {
  abstract getLabel(key: string): string
  abstract toString(): string
  abstract getDetailLink(): string

  protected getIdFromApiUrl(url: ApiUrl): number | null {
    if (!apiUrlValidator.safeParse(url)) throw new Error('invalid url')
    const match = url.match(/\/(\d+)\/$/)
    if (!match) return null
    return parseInt(match[1])
  }

  protected convertStringToNumber(numericString: string): number {
    return parseFloat(numericString.replace(',','').trim())
  }

  public format(key: string) {
    return this[key]
  }
}
