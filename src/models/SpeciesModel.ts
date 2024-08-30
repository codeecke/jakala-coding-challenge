import { apiLoader } from '../helper/apiLoader'
import { Species } from '../types/Species'
import { AbstractModel } from './AbstractModel'
import { FilmModel } from './FilmModel'
import { PeopleModel } from './PeopleModel'
import { PlanetModel } from './PlanetModel'

export class SpeciesModel extends AbstractModel {
  public readonly id: number
  public readonly name: string
  public readonly created: Date
  public readonly edited: Date
  public readonly url: string
  public readonly classification: string
  public readonly designation: string
  public readonly averageHeight: number
  public readonly skinColors: string[]
  public readonly hairColors: string[]
  public readonly eyeColors: string[]
  public readonly averageLifespan: number
  public homeworld: PlanetModel | null
  public readonly language: string
  public readonly films: FilmModel[] = []
  public readonly people: PeopleModel[] = []

  constructor(apiData: Species, autoload: boolean = false) {
    super()
    const people = apiData.people
    const films = apiData.films
    const homeworld =
      apiData.homeworld && this.getIdFromApiUrl(apiData.homeworld)

    this.name = apiData.name
    this.created = new Date(apiData.created)
    this.edited = new Date(apiData.edited)
    this.url = apiData.url
    this.id = this.getIdFromApiUrl(apiData.url) ?? 0
    this.classification = apiData.classification
    this.designation = apiData.designation
    this.averageHeight = this.convertStringToNumber(apiData.average_height)
    this.skinColors = apiData.skin_colors.split(',')
    this.hairColors = apiData.hair_colors.split(',')
    this.eyeColors = apiData.eye_colors.split(',')
    this.averageLifespan = this.convertStringToNumber(apiData.average_lifespan)
    this.language = apiData.language

    if (homeworld && autoload) {
      apiLoader
        .fetchPlanetById(homeworld ?? 0, false)
        .then((planet) => (this.homeworld = planet))
    }

    if (films && autoload) {
      films.forEach(async (filmUri) => {
        const id = this.getIdFromApiUrl(filmUri)
        if (!id) return
        const film = await apiLoader.fetchFilmById(id, false)
        this.films.push(film)
      })
    }

    if (people && autoload) {
      people.forEach(async (filmUri) => {
        const id = this.getIdFromApiUrl(filmUri)
        if (!id) return
        const people = await apiLoader.fetchPersonById(id, false)
        this.people.push(people)
      })
    }
  }

  getLabel(key: string): string {
    const labels = {
      name: 'Name',
      url: 'API',
      classification: 'Classification',
      designation: 'Designation',
      averageHeight: 'Average height',
      skinColors: 'Skin colors',
      hairColors: 'Hair colors',
      eyeColors: 'Eye colors',
      averageLifespan: 'Average lifespan',
      homeworld: 'Homeworld',
      language: 'Language',
      films: 'Films',
      people: 'People'
    }
    return labels[key]
  }
  toString(): string {
    return this.name
  }
  getDetailLink(): string {
    return '/species/' + this.id
  }
}
