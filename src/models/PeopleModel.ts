import { z } from 'zod'
import { apiLoader } from '../helper/apiLoader'
import { People } from '../types'
import { genderValidator } from '../zod/genderValidator'
import { AbstractModel } from './AbstractModel'
import { FilmModel } from './FilmModel'
import { PlanetModel } from './PlanetModel'
import { SpeciesModel } from './SpeciesModel'

export class PeopleModel extends AbstractModel {
  public readonly id: number
  public readonly name: string
  public readonly height: number
  public readonly mass: number
  public readonly hairColor: string
  public readonly skinColor: string
  public readonly eyeColor: string
  public readonly birthYear: string
  public readonly gender: z.infer<typeof genderValidator>
  public homeworld: PlanetModel
  public readonly films: FilmModel[] = []
  public readonly species: SpeciesModel[] = []
  public readonly vehicles: number[]
  public readonly starships: number[]
  public readonly created: Date
  public readonly edited: Date
  public readonly url: string

  constructor(apiData: People, autoload: boolean = false) {
    super()

    const homeworld = this.getIdFromApiUrl(apiData.homeworld)
    const films = apiData.films
    const species = apiData.species

    this.id = this.getIdFromApiUrl(apiData.url) ?? 0
    this.name = apiData.name
    this.height = this.convertStringToNumber(apiData.height)
    this.mass = this.convertStringToNumber(apiData.mass)
    this.hairColor = apiData.hair_color
    this.skinColor = apiData.skin_color
    this.eyeColor = apiData.eye_color
    this.birthYear = apiData.birth_year
    this.gender = apiData.gender
    if (homeworld && autoload) {
      apiLoader
        .fetchPlanetById(this.getIdFromApiUrl(apiData.homeworld) ?? 0, false)
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

    if (species && autoload) {
      species.forEach(async (speciesUri) => {
        const id = this.getIdFromApiUrl(speciesUri)
        if (!id) return
        const species = await apiLoader.fetchSpeciesById(id, false)
        this.species.push(species)
      })
    }

    this.vehicles = apiData.vehicles
      .map((url) => this.getIdFromApiUrl(url))
      .filter((id) => id !== null)

    this.starships = apiData.starships
      .map((url) => this.getIdFromApiUrl(url))
      .filter((id) => id !== null)

    this.created = new Date(apiData.created)
    this.edited = new Date(apiData.edited)
    this.url = apiData.url
  }

  getLabel(key: string): string {
    const labels = {
      name: 'Name',
      height: 'Height',
      mass: 'Mass',
      hairColor: 'Hair color',
      skinColor: 'Skin color',
      eyeColor: 'Eye color',
      birthYear: 'Birth year',
      gender: 'Gender',
      homeworld: 'Homeworld',
      films: 'Films',
      species: 'Species',
      vehicles: 'Vehicles',
      starships: 'Starships',
      url: 'API-Uri'
    }
    return labels[key]
  }

  toString() {
    return this.name
  }

  getDetailLink(): string {
    return '/people/' + this.id
  }

  format(key: string): string {
    switch(key) {
      case 'height': return (this.height / 100).toFixed(2) + ' m'
      case 'mass': return this.mass + ' kg'
      default: return super.format(key)
    }
      
  }

}
