import { apiLoader } from '../helper/apiLoader'
import { Planet } from '../types/Planet'
import { AbstractModel } from './AbstractModel'
import { FilmModel } from './FilmModel'
import { PeopleModel } from './PeopleModel'

export class PlanetModel extends AbstractModel {
  public readonly id: number
  public readonly name: string
  public readonly rotationPeriod: number
  public readonly orbitalPeriod: number
  public readonly diameter: number
  public readonly climate: string
  public readonly gravity: string
  public readonly terrain: string
  public readonly surfaceWater: number
  public readonly population: number
  public readonly residents: PeopleModel[] = []
  public readonly films: FilmModel[] = []
  public readonly created: string
  public readonly edited: string
  public readonly url: string

  constructor(apiData: Planet, autoload: boolean = false) {
    super()
    const residents = apiData.residents
    const films = apiData.films

    this.id = this.getIdFromApiUrl(apiData.url) ?? 0
    this.name = apiData.name
    this.rotationPeriod = this.convertStringToNumber(apiData.rotation_period)
    this.orbitalPeriod = this.convertStringToNumber(apiData.orbital_period)
    this.diameter = this.convertStringToNumber(apiData.diameter)
    this.climate = apiData.climate
    this.gravity = apiData.gravity
    this.terrain = apiData.terrain
    this.surfaceWater = this.convertStringToNumber(apiData.surface_water)
    this.population = this.convertStringToNumber(apiData.population)

    if (residents && autoload) {
      residents.forEach((residentUri) => {
        const id = this.getIdFromApiUrl(residentUri)
        if (!id) return
        apiLoader
          .fetchPersonById(id, false)
          .then((resident) => this.residents.push(resident))
      })
    }
    if (films && autoload) {
      apiData.films.map(async (filmUri) => {
        const id = this.getIdFromApiUrl(filmUri)
        if (id === null) return
        const film = await apiLoader.fetchFilmById(id, false)
        this.films.push(film)
      })
    }

    this.created = apiData.created
    this.edited = apiData.edited
    this.url = apiData.url
  }

  getLabel(key: string): string {
    const labels = {
      name: 'Name',
      rotationPeriod: 'Rotation period',
      orbitalPeriod: 'Orbital period',
      diameter: 'Diameter',
      climate: 'Climate',
      gravity: 'Gravity',
      terrain: 'Terrain',
      surfaceWater: 'Surface with Water',
      population: 'Population',
      residents: 'Residents',
      films: 'Films',
      url: 'API'
    }
    return labels[key]
  }

  toString() {
    return this.name
  }

  getDetailLink(): string {
    return '/planets/' + this.id
  }
}
