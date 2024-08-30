import { getIdFromApiUrl } from '../helper/getIdFromApiUrl'
import { People } from '../types'

export class PeopleModel {
  public readonly id: number
  public readonly name: string
  public readonly height: number
  public readonly mass: number
  public readonly hairColor: string
  public readonly skinColor: string
  public readonly eyeColor: string
  public readonly birthYear: string
  public readonly gender: 'male' | 'female' | 'n/a'
  public readonly homeworld: number
  public readonly films: number[]
  public readonly species: number[]
  public readonly vehicles: number[]
  public readonly starships: number[]
  public readonly created: Date
  public readonly edited: Date
  public readonly url: string

  constructor(apiData: People) {
    this.id = getIdFromApiUrl(apiData.url) ?? 0
    this.name = apiData.name
    this.height = parseInt(apiData.height)
    this.mass = parseInt(apiData.mass)
    this.hairColor = apiData.hair_color
    this.skinColor = apiData.skin_color
    this.eyeColor = apiData.eye_color
    this.birthYear = apiData.birth_year
    this.gender = apiData.gender
    this.homeworld = getIdFromApiUrl(apiData.homeworld) ?? 0
    this.films = apiData.films
      .map((url) => getIdFromApiUrl(url))
      .filter((id) => id !== null)

    this.species = apiData.species
      .map((url) => getIdFromApiUrl(url))
      .filter((id) => id !== null)

    this.vehicles = apiData.vehicles
      .map((url) => getIdFromApiUrl(url))
      .filter((id) => id !== null)

    this.starships = apiData.starships
      .map((url) => getIdFromApiUrl(url))
      .filter((id) => id !== null)

    this.created = new Date(apiData.created)
    this.edited = new Date(apiData.edited)
    this.url = apiData.url
  }
}
